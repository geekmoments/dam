import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import {BannerComponent} from './components/banner/banner.component';
import {HomeComponent} from './components/home/home.component';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule
  ],
  declarations: [
    BannerComponent,
    HomeComponent
  ]
})
export class HomeModule {}
