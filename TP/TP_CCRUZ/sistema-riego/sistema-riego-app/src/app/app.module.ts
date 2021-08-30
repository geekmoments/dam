import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {DeviceComponent} from './device/components/device/device.component';
import {DevicesComponent} from './device/components/devices/devices.component';
import {ContactComponent} from './contact/components/contact/contact.component';
import {DemoComponent} from './demo/components/demo/demo.component';
import {PageNotFoundComponent} from './page-not-found/components/page-not-found/page-not-found.component';
import {DeviceDetailComponent} from './device/components/device-detail/device-detail.component';
import {LayoutComponent} from './layout/layout.component';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    DevicesComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    DeviceDetailComponent,
    LayoutComponent

  ],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    HttpClientModule,

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
