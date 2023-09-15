import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionV1Component } from './base/accordion-v1/accordion-v1.component';
import { CardComponent } from './base/card/card.component';

import { BaseComponent } from './table/base/base.component';
import { TabComponent } from './base/tab/tab.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AppLayoutComponent } from './containers/_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './containers/_layout/site-layout/site-layout.component';
import { FooterComponent } from './containers/default/footer/footer.component';
import { HeaderComponent } from './containers/default/header/header.component';
import { SidebarComponent } from './containers/default/sidebar/sidebar.component';
import { NavbarComponent } from './containers/default/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    AccordionV1Component,
    CardComponent,
    BaseComponent,
    TabComponent,
    LoginComponent,
    SignupComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
