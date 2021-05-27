import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeVoltaFuturoPage } from './de-volta-futuro.page';

const routes: Routes = [
  {
    path: '',
    component: DeVoltaFuturoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeVoltaFuturoPageRoutingModule {}
