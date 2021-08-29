import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core'
import {Device} from "../devices/device.model";




@Component(
  {
    selector: 'app-device',
    templateUrl:'./device.component.html',
    styleUrls:['./device.component.scss']

  }
)

export class DeviceComponent implements DoCheck, OnInit,OnDestroy{


  @Input() device: Device;
  @Output() clickedDevice: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('1 contructor');
  }

//ngOnChanges(changes:SimpleChanges){ // detecta estado anterior y el nuevo
 //   console.log('ngOnChange');
 //   console.log(changes);
 // }

  ngOnInit(){
    console.log('3 ngOnInit');
  }

  ngDoCheck(){
    console.log('4 ngDocheck')
  }

  ngOnDestroy(){
    console.log('5 ng OnDestroy')
  }

  enterDevice() {
    console.log('enter to Device');
    this.clickedDevice.emit(this.device.deviceId); //emitimos el id

  }



}
