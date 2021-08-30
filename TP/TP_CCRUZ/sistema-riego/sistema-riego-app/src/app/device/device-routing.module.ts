import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeviceDetailComponent} from './components/device-detail/device-detail.component';
import {DevicesComponent} from './components/devices/devices.component';


const routes: Routes = [
  {
    path: '',
    component: DevicesComponent
  },
  {
    path: ':id',
    component: DeviceDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class DeviceRoutingModule {}
