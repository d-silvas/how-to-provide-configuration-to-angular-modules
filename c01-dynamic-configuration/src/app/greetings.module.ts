import { Component, Inject, InjectionToken, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

export const GOOD_MORNING = new InjectionToken<Observable<string>>('String for a morning greeting');

@Component({
  selector: 'app-good-morning',
  template: '{{ goodMorning$ | async }}',
})
export class GoodMorningComponent {
  constructor(@Inject(GOOD_MORNING) public goodMorning$: Observable<string>) {}
}

@NgModule({
  declarations: [GoodMorningComponent],
  imports: [CommonModule],
  exports: [GoodMorningComponent],
  providers: [
    { provide: GOOD_MORNING, useValue: of('Good morning!') },
  ]
})
export class GreetingsModule {
  static withConfig(configProvider: Provider): ModuleWithProviders<GreetingsModule> {
    return {
        ngModule: GreetingsModule,
        providers: [
          configProvider,
        ]
    };
  }
}
