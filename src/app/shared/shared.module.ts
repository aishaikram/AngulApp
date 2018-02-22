import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConvertToSpaces,  StarComponent],
  exports:[StarComponent, ConvertToSpaces, //exporting a component means this component can be accessed from the other modules which import this module
    FormsModule, CommonModule] // you can export a module wihtout importing it first
})
export class SharedModule { }
