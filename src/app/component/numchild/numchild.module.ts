import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumchildComponent } from './numchild.component';



@NgModule({
  declarations: [
    NumchildComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NumchildComponent
  ]
})
export class NumchildModule { }
