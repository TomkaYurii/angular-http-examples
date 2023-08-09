import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { Example01Component } from './example01/example01.component';
import { Example02Component } from './example02/example02.component';


@NgModule({
  declarations: [
    AppComponent,
    Example01Component,
    Example02Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
