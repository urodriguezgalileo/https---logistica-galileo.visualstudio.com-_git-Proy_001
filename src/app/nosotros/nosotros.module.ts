import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosComponent } from './nosotros.component';
import { NosotrosListComponent } from './nosotros-list/nosotros-list.component';
import { NosotrosCreatorComponent } from './nosotros-creator/nosotros-creator.component';

/*COMO ESTE ES EL MODULO DEL COMPONENTE FINAL, AQUI SI CARGAMOS EN LAS RUTAS EL COMPONENTE DIRECTO*/
const routes: Routes = [
  {
    path: '', /*ES UNA RUTA RELATIVA, VIENE DE 'url/nosotros' */
    component: NosotrosComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NosotrosComponent
  ],
  declarations: [
    NosotrosComponent,
    NosotrosListComponent,
    NosotrosCreatorComponent
  ]
})
export class NosotrosModule { }
