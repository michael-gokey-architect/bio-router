import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestDisplayComponent } from './guest-display/guest-display.component'; 
import { GuestEditComponent } from './guest-edit/guest-edit.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';   

const routes: Routes = [
  {
    path: '',
    component: GuestHomeComponent,
    children: [{ path: 'module-one', component: GuestHomeComponent }],
  },
  {
    path: 'guest-home',
    component: GuestDisplayComponent,
    children: [{ path: 'module-one', component: GuestDisplayComponent }],
  },
  {
    path: 'guest-edit',
    component: GuestEditComponent,
    children: [{ path: 'module-one', component: GuestEditComponent }],
  },
  {
    path: 'guest-display',
    component: GuestHomeComponent,
    children: [{ path: 'module-one', component: GuestHomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleARoutingModule {}