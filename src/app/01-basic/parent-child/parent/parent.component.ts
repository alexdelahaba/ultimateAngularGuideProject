import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  datoParaMiHijo = 'Hola hijo';
  datoNumero2 = 'Yo soy otro dato para ser heredado';
  constructor() {}

  ngOnInit(): void {}
}
