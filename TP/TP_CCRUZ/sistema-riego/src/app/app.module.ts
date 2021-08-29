import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

import {DeviceComponent} from './components/device.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
//import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { DevicesComponent } from './devices/devices.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    ExponentialPipe,
 //   HighlightDirective,
    HomeComponent,
    DevicesComponent,
    ContactComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    DeviceDetailComponent,
    LayoutComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
