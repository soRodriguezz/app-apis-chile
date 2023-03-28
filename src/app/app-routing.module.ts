import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'red',
    loadChildren: () => import('./red/red.module').then(m => m.RedModule),
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
