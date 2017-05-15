import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros-list',
  templateUrl: './nosotros-list.component.html',
  styleUrls: ['./nosotros-list.component.css']
})
export class NosotrosListComponent implements OnInit {

  actividades: string[] = ['venta', 'compra', 'robo']

  constructor() { }

  ngOnInit() {
  }

}
