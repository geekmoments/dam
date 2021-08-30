import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeviceComponent} from './components/device/device.component';
import {DevicesComponent} from './components/devices/devices.component';
import {SharedModule} from '../shared/shared.module';
import {DeviceRoutingModule} from './device-routing.module';
import {DeviceDetailComponent} from './components/device-detail/device-detail.component';

@NgModule({
  declarations: [
    DeviceComponent,
    DeviceDetailComponent,
    DevicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DeviceRoutingModule
  ]
})
export class DeviceModule {

}
