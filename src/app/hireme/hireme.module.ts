import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiremeRoutingModule } from './hireme-routing.module';
import { HiremeComponent } from './hireme.component';

@NgModule({
  declarations: [HiremeComponent],
  imports: [
    CommonModule,
    HiremeRoutingModule
  ]
})
export class HiremeModule { }
