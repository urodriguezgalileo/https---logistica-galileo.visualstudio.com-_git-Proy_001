import { Component, OnInit, Input } from '@angular/core';

import { DataStage } from './../shared/data-stage';

@Component({
  selector: 'compresor-chart',
  templateUrl: './compresor-chart.component.html',
  styleUrls: ['./compresor-chart.component.css']
})
export class CompresorChartComponent implements OnInit {

  @Input() chartType: string

  dataStages: DataStage[]

  constructor() {
    this.dataStages = []
    for (let index = 0; index < 3; index++) {
      this.dataStages[index] = new DataStage('BAR', index, index * 10  + 20)
    }
  }

  ngOnInit() {
  }

}
