import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNVeces]',
})
export class NVecesDirective {
  @Input('appNVeces') set repetirNVeces(veces: number) {
    this.viewContainer.clear();
    for (let i = 0; i < veces; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        indiceRetornado: i,
        textoAniadido: `${i}-elto`,
      });
    }
  }
  constructor(
    //referencia al elemento en el que se declara la directiva estructural
    private viewContainer: ViewContainerRef,
    //referencia al elemento INTERIOR al que se declara la directiva estructural
    private templateRef: TemplateRef<any>
  ) {}
}
