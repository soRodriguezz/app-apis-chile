import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecientesComponent } from './recientes/recientes.component';

const routes: Routes = [{ path: 'recientes', component: RecientesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SismosRoutingModule {}
