import { FactoryProvider, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOOD_MORNING, GreetingsModule } from './greetings.module';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  translate(lang: string, str: string): Observable<string> {
    // Would perform a network request to translate "str" into the "lang" language
    return of('¡Buenos días!')
  }
}

export const greetingsConfigFactory = (translateService: TranslateService): Observable<string> =>
  translateService.translate('es', 'Good morning!')

export const greetingsConfigProvider: FactoryProvider = {
  provide: GOOD_MORNING,
  useFactory: greetingsConfigFactory,
  deps: [TranslateService],
};

@Component({
  selector: 'app-root',
  template: `<app-good-morning></app-good-morning>`,
})
export class AppComponent {}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GreetingsModule.withConfig(greetingsConfigProvider),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
