import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SismosComponent } from './sismos.component';
import { SismosRoutingModule } from './sismos-routing.module';

@NgModule({
  declarations: [
    SismosComponent
  ],
  imports: [
    CommonModule,
    SismosRoutingModule,
  ]
})
export class SismosModule { }
