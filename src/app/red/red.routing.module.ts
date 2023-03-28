import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoMetroComponent } from './estado-metro/estado-metro.component';

const routes: Routes = [{ path: 'estado', component: EstadoMetroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedRoutingModule { }