import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, AfterViewInit {
  datoParaMiHijo = 'Hola hijo';
  datoNumero2 = 'Yo soy otro dato para ser heredado';
  datosRecibidosDelHijo = '';

  datoRecibidoMedianteViewChild = '';

  @ViewChild(ChildComponent) child;
  constructor() {}

  ngOnInit(): void {}

  datosRecibidos(event) {
    this.datosRecibidosDelHijo = event;
    console.log(event);
  }

  ngAfterViewInit() {
    this.datoRecibidoMedianteViewChild = this.child.datoAEmitirYSerRecibidoMedianteViewChild;
    console.log(this.child);
  }
}
