import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDeafaultComponent } from './page-deafault.component';

const routes: Routes = [{ path: '', component: PageDeafaultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageDeafaultRoutingModule { }
