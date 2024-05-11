import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'module-a',
    loadChildren: () =>
      import(`./module-a/module-a.module`).then((m) => m.ModuleAModule),
  },
  {
    path: 'module-b',
    loadChildren: () =>
      import(`./module-b/module-b.module`).then((m) => m.ModuleBModule),
  },
  {
    path: 'module-c',
    loadChildren: () =>
      import(`./module-c/module-c.module`).then((m) => m.ModuleCModule),
  },
  { path: '', redirectTo: 'module-a', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
