import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettePage } from './recette.page';

const routes: Routes = [
  {
    path: '',
    component: RecettePage
  },
  {
    path: 'ajout-recette',
    loadChildren: () => import('./ajout-recette/ajout-recette.module').then( m => m.AjoutRecettePageModule)
  },
  {
    path: 'detail-recette',
    loadChildren: () => import('./detail-recette/detail-recette.module').then( m => m.DetailRecettePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettePageRoutingModule {}
