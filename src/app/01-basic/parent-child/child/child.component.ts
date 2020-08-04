import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() datoDeMiPadre: string;
  @Input('datoNumero2') otroDatoRecibido: string;

  @Output() datoOutput = new EventEmitter<string>();
  datoAEmitir = 'Vengo del hijo';
  datoAEmitirYSerRecibidoMedianteViewChild =
    'He sido recibido mediante ViewChild';
  constructor() {}

  ngOnInit(): void {}

  emitirAlPadre() {
    this.datoOutput.emit(this.datoAEmitir);
  }
}
