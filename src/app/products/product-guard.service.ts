import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';

// import { CanActivate } from '@angular/router/src/interfaces';
@Injectable()
//implements this specific type of guard.
// this service keeps the checks if user specifies wrong url or wrong product id
export class ProductGuardService implements CanActivate {
  

  constructor(private _router: Router) {

   }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1)
    {
      alert("invalid product id");
      this._router.navigate(['/products']);
      return false;
    };
    return true;
  }
}
