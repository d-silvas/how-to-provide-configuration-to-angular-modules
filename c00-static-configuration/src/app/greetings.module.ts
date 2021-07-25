import { Component, Inject, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const GOOD_MORNING = new InjectionToken<string>('String for a morning greeting');

@Component({
  selector: 'app-good-morning',
  template: '{{ goodMorning }}',
})
export class GoodMorningComponent {
  constructor(@Inject(GOOD_MORNING) public goodMorning: string) {}
}

@NgModule({
  declarations: [GoodMorningComponent],
  imports: [CommonModule],
  exports: [GoodMorningComponent],
  providers: [
    { provide: GOOD_MORNING, useValue:'Good morning!' },
  ]
})
export class GreetingsModule {
  static withConfig(goodMorning: string): ModuleWithProviders<GreetingsModule> {
    return {
        ngModule: GreetingsModule,
        providers: [
          { provide: GOOD_MORNING, useValue: goodMorning },
        ]
    };
  }
}
