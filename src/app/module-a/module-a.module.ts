import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing';

import { GuestDisplayComponent } from './guest-display/guest-display.component';
import { GuestEditComponent } from './guest-edit/guest-edit.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';

@NgModule({
  declarations: [
    GuestDisplayComponent,
    GuestEditComponent,
    GuestHomeComponent
  ],
  imports: [
    CommonModule,
    ModuleARoutingModule
  ]
})
export class ModuleAModule { }
