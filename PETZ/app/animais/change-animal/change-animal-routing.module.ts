import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeAnimalPage } from './change-animal.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeAnimalPageRoutingModule {}
