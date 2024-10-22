import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeCuidadorPageRoutingModule } from './change-cuidador-routing.module';

import { ChangeCuidadorPage } from './change-cuidador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeCuidadorPageRoutingModule
  ],
  declarations: [ChangeCuidadorPage]
})
export class ChangeCuidadorPageModule {}
