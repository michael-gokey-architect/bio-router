import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ModuleAModule } from './module-a/module-a.module';
import { ModuleBModule } from './module-b/module-b.module';
import { ModuleCModule } from './module-c/module-c.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleAModule,
    ModuleBModule,
    ModuleCModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
