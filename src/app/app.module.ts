import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from "./shared/shared.module";
import { PortafolioModule } from "./portafolio/portafolio.module";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,

    PortafolioModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
