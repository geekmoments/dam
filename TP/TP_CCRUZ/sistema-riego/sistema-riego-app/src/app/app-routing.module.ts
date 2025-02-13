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
        //component: DevicesComponent
        loadChildren: () => import('./device/device.module').then(m => m.DeviceModule)
      },
      {
        path: 'demo',
        //path: 'devices/:id',
        //component: DeviceDetailComponent
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'contact',
        //component: ContactComponent
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      }
    ]},

  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
