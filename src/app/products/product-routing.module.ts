//main application routing module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';

@NgModule({
  imports: [
      // used forChild instead of forRoot as tp prevent Registering router service provider which is registered once in app-routing module
       //declares router directives and exposes configured routes
        RouterModule.forChild([
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent },
      ]),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
