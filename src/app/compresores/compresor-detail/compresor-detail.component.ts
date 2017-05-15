import { Component, OnInit } from '@angular/core';

import { Compresor } from './../shared/compresor';

@Component({
  selector: 'compresor-detail',
  templateUrl: './compresor-detail.component.html',
  styleUrls: ['./compresor-detail.component.css']
})
export class CompresorDetailComponent implements OnInit {
  compresor: Compresor

  constructor() {
    this.compresor = new Compresor('CYCLE ENABLED', 'PARADO', 1600, 123, 1235)
  }

  ngOnInit() {
  }

}
