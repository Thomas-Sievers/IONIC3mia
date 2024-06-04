import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tela-confirmar/:tempoDiaria/:precoDiaria/:valorTotal',
    loadChildren: () => import('./tela-confirmar/tela-confirmar.module').then( m => m.TelaConfirmarPageModule)
  },
  {
    path: 'tela-valor-final/:valorTotal',
    loadChildren: () => import('./tela-valor-final/tela-valor-final.module').then( m => m.TelaValorFinalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
