import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutRecettePageRoutingModule } from './ajout-recette-routing.module';

import { AjoutRecettePage } from './ajout-recette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutRecettePageRoutingModule
  ],
  declarations: [AjoutRecettePage]
})
export class AjoutRecettePageModule {}
