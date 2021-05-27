import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeVoltaFuturoPageRoutingModule } from './de-volta-futuro-routing.module';

import { DeVoltaFuturoPage } from './de-volta-futuro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeVoltaFuturoPageRoutingModule
  ],
  declarations: [DeVoltaFuturoPage]
})
export class DeVoltaFuturoPageModule {}
