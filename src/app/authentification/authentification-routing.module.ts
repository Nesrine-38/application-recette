import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentificationPage } from './authentification.page';

const routes: Routes = [
  {
    path: '',
    component: AuthentificationPage
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentificationPageRoutingModule {}
