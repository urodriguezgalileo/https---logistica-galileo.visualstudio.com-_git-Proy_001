import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { CoreModule } from './core/core.module';
import { LogisticaShellComponent } from './core/logistica-shell/logistica-shell.component';

import { MultiplicadorPipe } from './shared/pipes/multiplicador.pipe';
import { SumadorArrayPipe } from './shared/pipes/sumador-array.pipe';
import { ProcesadorArrayPipe } from './shared/pipes/procesador-array.pipe';
import { PotenciadorPipe } from './shared/pipes/potenciador.pipe';
import { OcultarDirective } from './shared/directives/ocultar.directive';

@NgModule({
  declarations: [
    MultiplicadorPipe,
    SumadorArrayPipe,
    ProcesadorArrayPipe,
    PotenciadorPipe,
    OcultarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [LogisticaShellComponent] /*aqui va el componente que arranca la aplicacion desde el index.html*/
})
export class AppModule { } /*el modulo 'app' llama al modulo 'core', donde este ultimo contiene el componente 'logistica'*/
