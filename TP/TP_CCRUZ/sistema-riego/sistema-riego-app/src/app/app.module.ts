import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {DeviceComponent} from './device/device.component';
import {DevicesComponent} from './devices/devices.component';
import {ContactComponent} from './contact/contact.component';
import {DemoComponent} from './demo/demo.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DeviceDetailComponent} from './device-detail/device-detail.component';
import {LayoutComponent} from './layout/layout.component';
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
    CoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
