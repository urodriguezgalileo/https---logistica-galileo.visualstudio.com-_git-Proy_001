import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

import { LogisticaShellComponent } from './logistica-shell/logistica-shell.component';
import { TopBarComponent } from './logistica-shell/top-bar/top-bar.component';
import { MainContentComponent } from './logistica-shell/main-content/main-content.component';
import { FooterComponent } from './logistica-shell/footer/footer.component';


/*LA IMPORTACION DE LOS MODULOS LOGIN Y NOSOTROS AQUI YA NO APARECE, ES DECIR YA FUE SUSTITUIDA EN EL PASO ANTERIOR EN LAS ROUTAS*/
/*AL HACER ESTO, EVITAMOS QUE WEBPACK NOS CARGUE LOS MODULOS EN LOS IMPORTS HACIENDO LA CARGA DE ARCHIVOS MAS LIVIANA*/
@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    LogisticaShellComponent
  ],
  declarations: [LogisticaShellComponent, TopBarComponent, MainContentComponent, FooterComponent]
})
export class CoreModule { }

/* - ESTE MODULO PERMITE MONTAR TODOS LOS LAYOUT PRINCIPALES DE LA APLICACION PARA DEJAR EL APP LO MAS LIBERADO POSIBLE.
   - ASUME TODO LO QUE TRADICIONALMENTE HACIA APP.
   - ES UN MODULO DE INFRAESTRUCTURA, Y NO DE FUNCIONALIDAD COMO LO SON LOS MODULOS DE 'LOGIN' Y 'NOSOTROS'
   - ES UN MODOULO QUE SE CARGA AL INICIO DE FORMA ESTATICA, Y NO POR LAZY LOADING (AL IGUAL QUE EL MODULO 'SHARED')

   OBJETIVO: DEJAR EL APP VACIO PARA QUE SIRVA PARA OTRAS APLICACIONES

   EJ: MENU SUPERIOR, BARRA DE NAVEGACION LATERAL, COMPONENTE PARA EL MAIN CONTENT, FOOTER

   LOS MODULOS DE ROUTING TAMBIEN VAN AQUI
*/
