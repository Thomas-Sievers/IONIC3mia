import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCuidadorPageRoutingModule } from './add-cuidador-routing.module';

import { AddCuidadorPage } from './add-cuidador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCuidadorPageRoutingModule
  ],
  declarations: [AddCuidadorPage]
})
export class AddCuidadorPageModule {}
