import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { CompresoresComponent } from './compresores.component';
import { CompresorDetailComponent } from './compresor-detail/compresor-detail.component';
import { CompresorChartComponent } from './compresor-chart/compresor-chart.component';
import { CompresorTemperatureChartComponent } from './compresor-temperature-chart/compresor-temperature-chart.component';
import { CompresorChartElementComponent } from './compresor-chart-element/compresor-chart-element.component';

/*COMO ESTE ES EL MODULO DEL COMPONENTE FINAL, AQUI SI CARGAMOS EN LAS RUTAS EL COMPONENTE DIRECTO*/
const routes: Routes = [
  {
    path: '', /*ES UNA RUTA RELATIVA, VIENE DE 'url/nosotros' */
    component: CompresoresComponent
  }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CompresoresComponent,
    CompresorDetailComponent,
    CompresorChartComponent,
    CompresorTemperatureChartComponent,
    CompresorChartElementComponent
  ],
  exports: [
    CompresoresComponent
  ]
})
export class CompresoresModule { }
