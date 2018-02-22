import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //contains *ngIf and ngFor like directives
import { FormsModule } from '@angular/forms'; //contains ngModal and two way binding
import { HttpClientModule } from '@angular/common/http'; //registers services 
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';


import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProductRoutingModule,
    SharedModule    
  ],
  providers: [ProductService, 
    ProductGuardService],

  declarations: [
    ProductListComponent,
    ProductDetailComponent]
})
export class ProductModule { }
