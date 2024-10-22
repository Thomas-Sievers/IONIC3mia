import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCuidadorPage } from './add-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: AddCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCuidadorPageRoutingModule {}
