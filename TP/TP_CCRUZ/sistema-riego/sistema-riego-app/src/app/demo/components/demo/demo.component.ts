import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'sistema-riego';
  newDevice = 'newdevice'
  devicesTest = ['light','temperature','humidity','CO2'];
  analogRead = 10;
  constructor() { }

  ngOnInit(): void {
  }
  addDevice(){
    this.devicesTest.push(this.title);
  }
  deleteDevice(index:number){
    this.devicesTest.splice(index);
  }
}
