import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule
  ]
})
export class SharedModule { }

/*
- MODULO QUE SE CARGA EN FORMA ESTATICA AL COMIENZO DEL PROGRAMA.
- AQUI IRAN TODAS LAS FUNCIONES ESTATICAS QUE REUTILIZAREMOS EN OTROS MODULOS (LOS FUNCIONALES, ES DECIR: NO ES EL CASO DE CORE).
*/
