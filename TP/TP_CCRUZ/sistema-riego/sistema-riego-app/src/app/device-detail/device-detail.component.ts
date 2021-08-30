import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router";
import {DevicesService} from "../core/services/devices/devices.service";
import {Device} from "../devices/device.model";

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {

  Device:Device;
  constructor(
    private route:ActivatedRoute,
    private devicesService: DevicesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      const id = params.id;// extraemos del json
      this.Device=this.devicesService.getDevice(id);

     });

  }

}
