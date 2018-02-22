import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http';


// this decorator is required for the service itself requires an injectable but it's a good practice to do it anyways
@Injectable()
export class ProductService {
    private _productURL = '../assets/products.json';
    private _observableData: Observable<IProduct[]>;
    constructor(private _http: HttpClient) {
    }
    getProducts(): Observable<IProduct[]> {
        // do is an operator method on observale to peak into the data returned from server and use it for debugging
         this._observableData = this._http.get<IProduct[]>(this._productURL);
        this._observableData.do(data => console.log('All: ' + JSON.stringify(data))).catch(this.handleError);
        return this._observableData; 
       /*  return this._http.get(this._productURL)
        .map((response: Response) => <IProduct[]> response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError); */

    }
    //copied from deborah code at the end
    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    // exception handling is required when talking to external webservices 
    // as anything can go wrong like invalid request or lost connection
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
