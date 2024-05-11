import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminEventComponent } from './admin-event/admin-event.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [{ path: 'module-one', component: AdminHomeComponent }],
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent,
    children: [{ path: 'module-one', component: AdminHomeComponent }],
  },
  {
    path: 'admin-event',
    component: AdminEventComponent,
    children: [{ path: 'module-one', component: AdminEventComponent }],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleCRoutingModule {}