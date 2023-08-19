import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './accueil.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AccueilPage,
    children: [
      {
        path: 'recherche',
        loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
      },
      {
        path: 'favoris',
        loadChildren: () => import('./favoris/favoris.module').then( m => m.FavorisPageModule)
      },
    ]
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./a-propos/a-propos.module').then( m => m.AProposPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule {}
