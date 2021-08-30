import { Injectable } from '@angular/core';
import {Device} from "../../../device/components/devices/device.model";

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  devices:Device[] =[
    { id:'1',
      name: "Sensor 1" ,
      location:"Patio" ,
      electrovalvulaId:1,
      icon: "image address",
      description:"this divice is for..."
    },
    { id:'2',
      name:"Sensor 2" ,
      location:"Cocina" ,
      electrovalvulaId:2,
      icon: "image address",
      description:"this divice is for..."
    },
    { id:'3',
      name:"Sensor 3",
      location:"Jardin Delantero",
      electrovalvulaId:3,
      icon: "image address",
      description:"this divice is for..."
    },
    { id:'4',
      name:"Sensor 4",
      location:"Living",
      electrovalvulaId:4,
      icon: "image address",
      description:"this divice is for..."
    }

  ]
  constructor() { }

  getAllDevices(){
    return this.devices;
  }
  getDevice(id:string){
    return this.devices.find(item=> id === item.id);
  }

}
