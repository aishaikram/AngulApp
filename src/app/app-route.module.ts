//main application routing module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
     //Registers router service provider, declares router directives and exposes configured routes
   
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      //default path
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      //in case path doesnt match to any routed path
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
