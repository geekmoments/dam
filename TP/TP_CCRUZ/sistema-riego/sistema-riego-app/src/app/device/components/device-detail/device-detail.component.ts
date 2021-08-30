import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {DevicesService} from '../../../core/services/devices/devices.service';
import {Device} from '../../../core/models/device.model';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
    device: Device;
   constructor(
    private route: ActivatedRoute,
    private devicesService: DevicesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id = params.id;// extraemos del json
      this.fetchDevice(id);
      //this.device=this.devicesService.getDevice(id);
     });
  }
  fetchDevice(id: string){
     this.devicesService.getDevice(id)
       .subscribe(device=>{
        this.device = device;
        });
  }
  createDevice(){
     const newDevice:Device = {
       id:'5',
       name:'newDevice',
       location:'somewhere',
       electrovalvulaId:5,
       icon:'url',
       description:'text and more text'
     };
    this.devicesService.createDevice(newDevice)
      .subscribe(device=>{
        //console.log(device)
      });
  }
}
