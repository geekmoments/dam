import { Component, OnInit } from '@angular/core';
import {Device} from './device.model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: Device[] =[
    { id:'1',
      name: 'Sensor 1' ,
      location:'Patio' ,
      electrovalvulaId:1,
      icon: 'assets/img/imagen1.png',
      description:'this divice is for...'
    },

    { id:'2',
      name:'Sensor 2' ,
      location:'Cocina' ,
      electrovalvulaId:2,
      icon: 'assets/img/imagen2.png',
      description:'this divice is for...'


    },
    { id:'3',
      name:'Sensor 3',
      location:'Jardin Delantero',
      electrovalvulaId:3,
      icon: 'assets/img/imagen1.png',
      description:'this divice is for...'

    },
    { id:'4',
      name:'Sensor 4',
      location:'Living',
      electrovalvulaId:4,
      icon: 'assets/img/imagen2.png',
      description:'this divice is for...'
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }
  clickDevice(id: number){
    console.log('Device ID');
    console.log(id);
  }

}
