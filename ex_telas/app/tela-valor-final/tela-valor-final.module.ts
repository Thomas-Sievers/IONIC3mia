import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaValorFinalPageRoutingModule } from './tela-valor-final-routing.module';

import { TelaValorFinalPage } from './tela-valor-final.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaValorFinalPageRoutingModule
  ],
  declarations: [TelaValorFinalPage]
})
export class TelaValorFinalPageModule {}
