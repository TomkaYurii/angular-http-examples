import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Example01Component } from './example01/example01.component';

@NgModule({
  declarations: [
    AppComponent,
    Example01Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
