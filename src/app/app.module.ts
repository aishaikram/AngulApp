// Root Module of the application containing components, also uses browser module to use its functionality
import { BrowserModule } from '@angular/platform-browser'; // should be used only once in main module of a web browser app 
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { AppRoutingModule } from './app-route.module';

/* Feature Modules */
import { ProductModule } from './products/product.module';

@NgModule({

  // the local components that this module contains
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  // external modules
  imports: [
    BrowserModule,   
   
    //Registers router service provider, declares router directives and exposes configured routes
    // wildcard ** route should be at the end other wise product route will not be accessible, AppRotuingModule contains **
    //product module contains product routing module so it should come first than the wild card route 
    ProductModule,
    AppRoutingModule

  ],
  // bootstrap means startup component for the app
  bootstrap: [AppComponent]
})
export class AppModule { }
