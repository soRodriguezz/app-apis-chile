import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstadoMetroComponent } from './estado-metro.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';

@NgModule({
  declarations: [
    EstadoMetroComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ]
})
export class EstadoMetroModule { }
