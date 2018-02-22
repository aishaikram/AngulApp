import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from './product.service';

// no need for the selector as selector is required for nesting a component
//this component is needed for routing view purpose
@Component({
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  private sub: Subscription;

  /*    constructor here defines a private data member _router (of type ActivatedRoute service from the router )
    / for the ProductDetailComponent class and takes it from router service provider as an injector service
    // this service is already registered with router module added in app.module
    // using dependency injector pattern. */
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {

  }

  ngOnInit(): void {
    //let is new javascript feature which allows us to define a varaible with a block level scope
    //+ converts the string type into numeric type 
    /* let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    } */
    // copied from deborah's code 

    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getProduct(id);
      });

  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error);
}
  //demonstrating router using code (example save where u save before u route) 
  //instaed of router directives
  OnBack(): void {
    this._router.navigate(['/products']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
}

}
