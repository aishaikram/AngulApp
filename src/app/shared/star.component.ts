//  responsible for displaying stars in rating column and handling its associated click event and updating the rating value proerty 
//shared component currently used by product list comp but may be used by other components 

import {Component, OnChanges, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})


export class StarComponent implements OnChanges {

@Input() rating : number;
// defining an event property
// using output decorator to make it an output to the parent component
@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
// tslint:disable-next-line:no-unused-expression
starWidth: number ;

ngOnChanges(): void {
    // Convert x out of 5 starts
        // to y out of 86px width
    this.starWidth = this.rating * 86 / 5; // width of the div cell containing stars in stat.component.html file
}
onClick(): void {
this.ratingClicked.emit(` The rating ${this.rating} was clicked`);
}

}
