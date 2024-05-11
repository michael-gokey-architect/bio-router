import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { VendorDisplayComponent } from './vendor-display/vendor-display.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';

const routes: Routes = [
  {
    path: '',
    component: VendorHomeComponent,
    children: [{ path: 'module-one', component: VendorHomeComponent }],
  },
  {
    path: 'vendor-home',
    component: VendorHomeComponent,
    children: [{ path: 'module-one', component: VendorHomeComponent }],
  },
  {
    path: 'vendor-edit',
    component: VendorEditComponent,
    children: [{ path: 'module-one', component: VendorEditComponent }],
  },
  {
    path: 'vendor-display',
    component: VendorDisplayComponent,
    children: [{ path: 'module-one', component: VendorDisplayComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleBRoutingModule {}