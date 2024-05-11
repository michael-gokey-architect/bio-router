import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBRoutingModule } from './module-b-routing';

import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { VendorDisplayComponent } from './vendor-display/vendor-display.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';



@NgModule({
  declarations: [
    VendorHomeComponent,
    VendorDisplayComponent,
    VendorEditComponent
  ],
  imports: [
    CommonModule,
    ModuleBRoutingModule
  ]
})
export class ModuleBModule { }
