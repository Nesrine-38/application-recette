import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutRecettePage } from './ajout-recette.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutRecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutRecettePageRoutingModule {}
