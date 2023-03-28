import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageDeafaultRoutingModule } from './page-deafault-routing.module';
import { PageDeafaultComponent } from './page-deafault.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';


@NgModule({
  declarations: [
    PageDeafaultComponent
  ],
  imports: [
    CommonModule,
    PageDeafaultRoutingModule,
    NgZorroAntdModule,
  ]
})
export class PageDeafaultModule { }
