import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {DevicesComponent} from './devices/devices.component'
import {ContactComponent} from './contact/contact.component'
import {DemoComponent} from "./demo/demo.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'devices',
    component:DevicesComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
  ,
  {
    path:'demo',
    component:DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
