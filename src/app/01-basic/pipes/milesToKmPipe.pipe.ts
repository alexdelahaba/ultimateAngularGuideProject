import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesToKm',
})
export class MilesToKmPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (typeof value !== 'number') {
      return NaN;
    } else {
      return value * 1.60934 + 'Kms';
    }
  }
}
