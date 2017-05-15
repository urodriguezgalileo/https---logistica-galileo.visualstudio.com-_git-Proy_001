import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { DataStage } from './../shared/data-stage';
declare var Chart: any

const stageChartHeight = 500
const stageChartWidth = 200

@Component({
  selector: 'compresor-chart-element',
  templateUrl: './compresor-chart-element.component.html',
  styleUrls: ['./compresor-chart-element.component.css']
})
export class CompresorChartElementComponent implements OnInit {

  @ViewChild('layout') canvasRef;

  @Input() dataStage: DataStage

  constructor() {
  }

  ngOnInit() {
    let canvas = this.canvasRef.nativeElement;
    canvas.height = stageChartHeight;
    canvas.width = stageChartWidth;

    console.log(this.dataStage)
    let dataStageChart = {
                    labels: [this.dataStage.type],
                    datasets: [
                        {
                            label: 'Stage ' + this.dataStage.stageNumber,
                            borderWidth: 4,
                            data: [this.dataStage.realValue],
                            backgroundColor: 'rgba(5, 171, 41, 0.3)',
                            borderColor: 'rgba(5, 83, 11, 1)'
                        }
                    ]
    };

    let myBarChart = new Chart(canvas, {
      type: 'bar',
      data: dataStageChart,
      options : {
        responsive: true,
        annotation: {
          annotations:
          [
            {
                type: 'line',
                label: {},
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: '45',
                borderColor: 'green',
                borderWidth: 2
            },
            {
                type: 'line',
                label: {},
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: '70',
                borderColor: 'blue',
                borderWidth: 2
            },
            {
                type: 'line',
                id: 'lite',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: '90',
                borderColor: 'red',
                borderWidth: 10,
                label: {
                  yAdjust: 0,
                  enabled: false,
                  position: 'center',
                  content: 'MAX'
              }
            },
            {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: '10',
                borderColor: 'red',
                borderWidth: 10,
                label : {
                  yAdjust: 0,
                  enabled: false,
                  position: 'center',
                  content: 'MIN'
                }
            },
            {
                type: 'line',
                label: {},
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: '35',
                borderColor: 'gray',
                borderWidth: 2
            },
            {
                type: 'line',
                label: {},
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: '55',
                borderColor: 'gray',
                borderWidth: 2
            },
          ]
        },
        scales: {
          yAxes: [{id: 'y-axis-0', type: 'linear', position: 'left', ticks: {min: 0, max: 100}}]
        },
      }
    });
  }

}
