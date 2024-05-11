import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCRoutingModule } from './module-c-routing';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminEventComponent } from './admin-event/admin-event.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminEventComponent
  ],
  imports: [
    CommonModule,
    ModuleCRoutingModule
  ]
})
export class ModuleCModule { }
