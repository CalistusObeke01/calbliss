import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiremeComponent } from './hireme.component';

const routes: Routes = [
  {
    path: '',
    component: HiremeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiremeRoutingModule { }
