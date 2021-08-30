import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {PageNotFoundRoutingModule} from './page-not-found-routing.module';
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule {

}
