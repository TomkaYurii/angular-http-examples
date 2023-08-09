import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { Example01Component } from './example01/example01.component';
import { Example02Component } from './example02/example02.component';
import { Example03Component } from './example03/example03.component';
import { Example04Component } from './example04/example04.component';
import { Example05Component } from './example05/example05.component';
import { Example06Component } from './example06/example06.component';


@NgModule({
  declarations: [
    AppComponent,
    Example01Component,
    Example02Component,
    Example03Component,
    Example04Component,
    Example05Component,
    Example06Component
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
