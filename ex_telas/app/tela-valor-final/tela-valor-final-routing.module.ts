import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaValorFinalPage } from './tela-valor-final.page';

const routes: Routes = [
  {
    path: '',
    component: TelaValorFinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaValorFinalPageRoutingModule {}
