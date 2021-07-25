import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { GreetingsModule } from './greetings.module';

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
    GreetingsModule.withConfig('¡Buenos días!'),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
