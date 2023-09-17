import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S1RoutingModule } from './s1-routing.module';
import { S1Component } from './s1.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    S1Component,
    AboutUsComponent,
    ContactUsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    S1RoutingModule
  ]
})
export class S1Module { }
