import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

import { DeviceComponent } from './device/device.component';
import { DevicesComponent } from './devices/devices.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { LayoutComponent } from './layout/layout.component'
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
  //   HighlightDirective,
    DevicesComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    DeviceDetailComponent,
    LayoutComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        SharedModule,
        CoreModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
