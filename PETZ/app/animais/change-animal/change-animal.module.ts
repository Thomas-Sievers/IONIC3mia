import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeAnimalPageRoutingModule } from './change-animal-routing.module';

import { ChangeAnimalPage } from './change-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeAnimalPageRoutingModule
  ],
  declarations: [ChangeAnimalPage]
})
export class ChangeAnimalPageModule {}
