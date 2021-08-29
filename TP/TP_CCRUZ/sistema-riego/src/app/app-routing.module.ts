import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {DevicesComponent} from './devices/devices.component'
import {ContactComponent} from './contact/contact.component'
import {DemoComponent} from "./demo/demo.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DeviceDetailComponent} from "./device-detail/device-detail.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {
    path: '', // raiz "padre"
    component: LayoutComponent,  //todo apartir del componente layaout
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full', //en caso solo este en la raíz
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'devices',
        component: DevicesComponent
      },
      {
        path: 'devices/:id',
        component: DeviceDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]},
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
