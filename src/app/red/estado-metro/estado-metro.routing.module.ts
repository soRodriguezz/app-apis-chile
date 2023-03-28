import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoMetroComponent } from './estado-metro.component';

const routes: Routes = [{ path: '', component: EstadoMetroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionsRoutingModule { }