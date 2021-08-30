import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Device} from '../../models/device.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private  http: HttpClient) { }

  getAllDevices(){
    return this.http.get<Device[]>(environment.url_api);
  }
  getDevice(id: string){
    return this.http.get<Device>(`${environment.url_api}${id}`);
    //return this.devices.find(item=> id === item.id);
  }
  createDevice(device:Device){
    return this.http.post(`${environment.url_api}`,device);
  }
}
