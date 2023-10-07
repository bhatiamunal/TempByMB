import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionV1Component } from './base/accordion-v1/accordion-v1.component';
import { CardComponent } from './base/card/card.component';

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
import { ObservableComponent } from './learning/observable/observable.component';
import { FormsComponent } from './learning/forms/forms.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './learning/pipe/pipe.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTPRequestComponent } from './learning/http-request/http-request.component';
import { ProductsCrudComponent } from './SAH_Dashboard/Inventory/products-crud/products-crud.component';
import { VenderCrudComponent } from './SAH_Dashboard/payment/vender-crud/vender-crud.component';
import { CustomerCrudComponent } from './SAH_Dashboard/payment/customer-crud/customer-crud.component';
import { PurchaseInvoiceCrudComponent } from './SAH_Dashboard/Purchase/purchase-invoice-crud/purchase-invoice-crud.component';
import { SalesInvoiceCrudComponent } from './SAH_Dashboard/Sales/sales-invoice-crud/sales-invoice-crud.component';
import { EmployeeCrudComponent } from './SAH_Dashboard/User/employee-crud/employee-crud.component';
import { TablesComponent } from './containers/component/tables/tables.component';
import { ButtonsComponent } from './containers/component/buttons/buttons.component';
import { BadgesComponent } from './containers/component/badges/badges.component';
import { ProgressBarsComponent } from './containers/component/progress-bars/progress-bars.component';
import { SpinnersComponent } from './containers/component/spinners/spinners.component';
import { PaginationComponent } from './containers/component/pagination/pagination.component';
import { ListGroupsComponent } from './containers/component/list-groups/list-groups.component';
import { CardsComponent } from './containers/component/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionV1Component,
    CardComponent,

    TabComponent,
    LoginComponent,
    SignupComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    NavbarComponent,
    ObservableComponent,
    FormsComponent,
    PipeComponent,
    HTTPRequestComponent,
    ProductsCrudComponent,
    VenderCrudComponent,
    CustomerCrudComponent,
    PurchaseInvoiceCrudComponent,
    SalesInvoiceCrudComponent,
    EmployeeCrudComponent,
    TablesComponent,
    ButtonsComponent,
    BadgesComponent,
    ProgressBarsComponent,
    SpinnersComponent,
    PaginationComponent,
    ListGroupsComponent,
    CardsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
