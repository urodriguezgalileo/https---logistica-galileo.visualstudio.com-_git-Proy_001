import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*EL OBJETIVO DE USAR 'loadChildren' Y NO DIRECTAMENTE EL COMPONENTE ES QUE DE LA 1ER FORMA SE CARGA DINAMICAMENTE CUANDO SE NECESITA*/
/*AMBOS SON MODULOS FUNCIONALES QUE SE CARGAN POR LAZY LOADING*/
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './../login/login.module#LoginModule'
  },
  {
    path: 'nosotros',
    loadChildren: './../nosotros/nosotros.module#NosotrosModule'
  },
  {
    path: 'compresores',
    loadChildren: './../compresores/compresores.module#CompresoresModule'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ] // re-export the module declarations
})
export class CoreRoutingModule { }
