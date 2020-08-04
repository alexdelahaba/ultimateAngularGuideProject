import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus-routing-child-routes',
  templateUrl: './plus-routing-child-routes.component.html',
  styles: [],
})
export class PlusRoutingChildRoutesComponent implements OnInit {
  rutaHijo1 = 'first-child';
  primeraMediaRuta = 'ruta';
  segundaMediaRuta = 'distinta';
  constructor() {}

  ngOnInit(): void {}
}
