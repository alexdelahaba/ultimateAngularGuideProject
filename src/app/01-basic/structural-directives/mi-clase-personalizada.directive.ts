import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMiClasePersonalizada]',
})
export class MiClasePersonalizadaDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style;
    console.log(this.elementRef.nativeElement.style);
  }
}
