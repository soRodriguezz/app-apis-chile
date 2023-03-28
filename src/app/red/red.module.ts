import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { RedRoutingModule } from './red.routing.module';
import { EstadoMetroModule } from './estado-metro/estado-metro.module';

@NgModule({
  imports: [
    CommonModule,
    RedRoutingModule,
    EstadoMetroModule,
  ]
})
export class RedModule { }
