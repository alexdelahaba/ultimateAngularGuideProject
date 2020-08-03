import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMiClasePersonalizada]',
})
export class MiClasePersonalizadaDirective {
  // Este método recibe una propiedad del html y la aplica mediante una funcion set.
  @Input('appMiClasePersonalizada') set cambiarColorDelFondo(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.className = 'btn btn-outline-danger';
    this.elementRef.nativeElement.style.fontWeight = 1000;
    console.log(this.elementRef.nativeElement);
  }
}
