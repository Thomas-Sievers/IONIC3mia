import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeCuidadorPage } from './change-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeCuidadorPageRoutingModule {}
