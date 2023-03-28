import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EstadoMetroComponent } from './estado-metro.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ChampionsRoutingModule } from './estado-metro.routing.module';

@NgModule({
  declarations: [
    EstadoMetroComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgZorroAntdModule,
    ChampionsRoutingModule,
  ],
  exports: [
    EstadoMetroComponent,
  ]
})
export class EstadoMetroModule { }
