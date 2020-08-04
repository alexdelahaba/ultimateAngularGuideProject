import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() contador;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    // Se llama cada vez que una propiedad del componente es modificada, por ejemplo, si se le aporta nueva data desde un componente padre
    console.log('ngOnChanges');
  }
}
