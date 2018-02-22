// bootstrap, startup component for the application
// imports the Component library from core
import { Component } from '@angular/core';
// import { ProductService } from './products/product.service';

// templateUrl: './app.component.html',
// styleUrls: ['./app.component.css']
// ----- aisha --------
// metadata decorator using component directive to define a class as a component
// app-aisha is the custom tag name for this component which will be used in the main html page (index.html)
// tells that component with this tag name should be executed and replaced with its view (template)
// template defines the associated HTML view for this component whose elements are bound to the associated class
// component = template/view + class + metadata -----aisha
@Component({
  selector: 'app-root', // component name
  template:  // template is the view for the component calling the app-product-list component in its view
 `  <div>
 <h1> Hello world {{title}} </h1>
  <nav class='navbar navbar-default'>
  <div class='container-fluid'>
      <a class='navbar-brand'>{{title}}</a>
      <ul class='nav navbar-nav'>
          <li><a [routerLink]="['/welcome']">Home</a></li>
          <li><a [routerLink]="['/products']">Product List</a></li>
      </ul>
  </div>
</nav>
</div>
<div class='container'>
            <router-outlet></router-outlet>
        </div>
  `,
  // Create a provider at a higher level and register the service for the dependency injection usage by the components and its childrens
  // providers: [ProductService]
}
)
export class AppComponent {

  title = 'Angular Website (DK:Getting Started)';
}
