import { from, range } from 'rxjs';
import { scan } from 'rxjs/operators';

export const operadorScan = () => {
  const myObservable = range(1, 5);
  const totalAcumulador = (acumulador, actual) => {
    return acumulador + actual;
  };

  // Compara con el reduce, el reduce emite el valor final que genera el scan

  myObservable.pipe(scan(totalAcumulador, 17)).subscribe(console.log);
};
