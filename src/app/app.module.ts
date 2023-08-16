import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionV1Component } from './base/accordion-v1/accordion-v1.component';
import { CardComponent } from './base/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionV1Component,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
