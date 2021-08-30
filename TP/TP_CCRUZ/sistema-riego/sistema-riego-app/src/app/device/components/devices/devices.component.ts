import { Component, OnInit } from '@angular/core';
 import {Device} from '../../../core/models/device.model';
import {DevicesService} from '../../../core/services/devices/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices: Device[]=[];
  constructor(
    private devicesService: DevicesService
  ) { }

  ngOnInit(): void {
    this.fetchDevices();
  }
  clickDevice(id: number){
    console.log('Device ID');
    console.log(id);
  }
  fetchDevices(){
    this.devicesService.getAllDevices()
      .subscribe(devices=>{
        this.devices = devices;
      });
  }

}
