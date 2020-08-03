import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent implements OnInit {
  ejemploBoolean = true;
  claseAplicadaDirectamente = 'btn btn-outline-success';
  numeroPagina = 0;

  constructor() {}

  ngOnInit(): void {}

  getClass() {
    return 'btn btn-dark';
  }
}
