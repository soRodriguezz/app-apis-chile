import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'estado-metro',
    loadChildren: () => import('./red/estado-metro/estado-metro.module').then(m => m.EstadoMetroModule),
  },
  {
    path: 'default',
    loadChildren: () => import('./common/page-deafault/page-deafault.module').then(m => m.PageDeafaultModule)
  },
  { path: 'sismos', loadChildren: () => import('./sismos/sismos.module').then(m => m.SismosModule) },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/default'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
