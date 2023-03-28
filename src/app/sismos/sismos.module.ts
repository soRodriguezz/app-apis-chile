import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SismosRoutingModule } from './sismos-routing.module';
import { RecientesModule } from './recientes/recientes.module';

@NgModule({
  imports: [
    CommonModule,
    SismosRoutingModule,
    RecientesModule,
  ]
})
export class SismosModule { }
