import {DemoComponent} from './components/demo/demo.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {DemoRoutingModule} from './demo-routing.module';
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule {

}
