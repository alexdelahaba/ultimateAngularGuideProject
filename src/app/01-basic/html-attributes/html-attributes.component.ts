import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-attributes',
  templateUrl: './html-attributes.component.html',
  styleUrls: ['./html-attributes.component.css'],
})
export class HtmlAttributesComponent implements OnInit {
  claseElemento = 'btn btn-outline-danger';
  constructor() {}

  ngOnInit(): void {}

  imprimirEvento(event, tipoEvento: string) {
    console.log(event);
    console.log(tipoEvento);
    console.log('#######################################################');
  }

  submitForm(element: any) {
    console.log(element);
  }
}
