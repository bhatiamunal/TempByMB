import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { BrandComponent } from './SAH_Dashboard/Inventory/brand/brand.component'
import { CategoryComponent } from './SAH_Dashboard/Inventory/category/category.component'
import { ProductsCrudComponent } from './SAH_Dashboard/Inventory/products-crud/products-crud.component'

import  { PurchaseInvoiceCrudComponent } from './SAH_Dashboard/Purchase/purchase-invoice-crud/purchase-invoice-crud.component'

import { SalesInvoiceCrudComponent } from './SAH_Dashboard/Sales/sales-invoice-crud/sales-invoice-crud.component'

import {CustomerCrudComponent} from './SAH_Dashboard/User/customer-crud/customer-crud.component'
import {EmployeeCrudComponent} from './SAH_Dashboard/User/employee-crud/employee-crud.component'
import {VenderCrudComponent} from './SAH_Dashboard/User/vender-crud/vender-crud.component'

import { AdminComponent } from './SAH_Dashboard/admin/admin.component'

import { CustomerPaymentCrudComponent } from './SAH_Dashboard/payment/customer-crud/customer-crud.component';
import { VenderPaymentCrudComponent } from './SAH_Dashboard/payment/vender-crud/vender-crud.component';

import { AuthGaurdService } from './auth-gaurd.service';
const routes: Routes = [
  { 
    path: 's1', 
    loadChildren: () => import('./pages/s1.module').then(m => m.S1Module) ,
    
  },
  { path: 'Brand', component: BrandComponent , canActivate: [AuthGaurdService] },
  { path: 'Category', component: CategoryComponent , canActivate: [AuthGaurdService] },
  { path: 'Product', component: ProductsCrudComponent , canActivate: [AuthGaurdService] },

  { path: 'PurchaseInvoice', component: PurchaseInvoiceCrudComponent , canActivate: [AuthGaurdService] },
  { path: 'SalesInvoice', component: SalesInvoiceCrudComponent , canActivate: [AuthGaurdService] },

  { path: 'Customer-User', component: CustomerCrudComponent , canActivate: [AuthGaurdService] },
  { path: 'Employee-User', component: EmployeeCrudComponent , canActivate: [AuthGaurdService] },
  { path: 'VenderCrudComponent', component: VenderCrudComponent , canActivate: [AuthGaurdService] },

  { path: 'Admin', component: AdminComponent , canActivate: [AuthGaurdService] },

  { path: 'CustomerPaymentCrud', component: CustomerPaymentCrudComponent , canActivate: [AuthGaurdService] },
  { path: 'VenderPaymentCrudComponent', component: VenderPaymentCrudComponent , canActivate: [AuthGaurdService] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
