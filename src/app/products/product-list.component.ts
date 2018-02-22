// imports the Component library from core
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

// ----- aisha --------
// metadata decorator using component directive to define a class as a component
// app-aisha is the custom tag name for this component which will be used in the main html page (index.html)
// tells that component with this tag name should be executed and replaced with its view (template)
// template defines the associated HTML view for this component whose elements are bound to the associated class
// component = template/view + class + metadata -----aisha
@Component({
    // selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product Detail';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    _listFilter: string;
    filteredProducts: IProduct[];
    products: IProduct[] = [];
    errorMessage: string;
    name:string;

    // dependency Injecter constructor, shows that the component relies on this service instance to be injected by the Angular Injecter.
    // keep the constructor light to not execute heavy tasks like calling service and loading data, ngOnInit is the good place
    constructor(private _productService: ProductService) {
        // this._listFilter = 'cart';
    }
    // event handler for the nested component Output event property
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List' + message;
    }
    public get listFilter(): string {
        return this._listFilter;
    }

    public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    /* IProduct;
   errorMessage: string;
   private sub: Subscription;*/

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        // using ES2015 arrow function which is returning a filtered array if the condition provided in the arrow function is met
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    showName():void{
        alert('Oey badtameez ' + this.name +', pyar k button press karnay waley, chal ja k dafa ho or chup kar k so ja');
    }

    // onInit hook function (angular interface for initialization of a component)
    // great place to retrieve data for the template 
    // this is called after the constructor
    ngOnInit(): void {
        // calling method of subscribe on returned Observable object to get data n notification asynchronously
        // first parameter is the action to take whenever a data value is emitted by observable
        // when products object is emitted by Observale, it assigns the local product object to Observable products data and same for error
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            }
            , error => this.errorMessage = <any>error);

    }

}
