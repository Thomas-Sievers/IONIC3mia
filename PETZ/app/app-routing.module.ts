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
    path: 'animal/add-animal',
    loadChildren: () => import('./animais/add-animal/add-animal.module').then( m => m.AddAnimalPageModule)
  },
  {
    path: 'animal/change-animal/:id',
    loadChildren: () => import('./animais/change-animal/change-animal.module').then( m => m.ChangeAnimalPageModule)
  },
  {
    path: 'add-cuidador',
    loadChildren: () => import('./cuidadores/add-cuidador/add-cuidador.module').then( m => m.AddCuidadorPageModule)
  },
  {
    path: 'change-cuidador/:id',
    loadChildren: () => import('./cuidadores/change-cuidador/change-cuidador.module').then( m => m.ChangeCuidadorPageModule)
  },
  {
    path: 'cuidador',
    loadChildren: () => import('./cuidadores/cuidador/cuidador.module').then( m => m.CuidadorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
