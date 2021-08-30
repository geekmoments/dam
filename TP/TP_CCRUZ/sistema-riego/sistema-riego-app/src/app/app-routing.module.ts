import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';

import {DevicesComponent} from './device/components/devices/devices.component';
import {ContactComponent} from './contact/components/contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/components/page-not-found/page-not-found.component';
import {DeviceDetailComponent} from './device/components/device-detail/device-detail.component';
import {LayoutComponent} from './layout/layout.component';
import {DemoComponent} from './demo/components/demo/demo.component';

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
        //component:
        loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
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
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
