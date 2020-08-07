import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// ==================================
// map es un operador bastante flexible y genérico, es muy similar al map de javascript
// ==================================
const myObservable = range(1, 5);

export const operadorMap = () => {
  myObservable
    .pipe(
      map<number, number>((value) => {
        value += 5;
        value = value * 5;
        return value;
      })
    )
    .subscribe((resp) => {
      console.log('1er map', resp);
    });
};

export const operadorMapEventoClick = () => {
  const keyupObservable = fromEvent(document, 'keyup');

  keyupObservable
    .pipe(
      map((val: any) => {
        return val.key;
      })
    )
    .subscribe((resp) => console.log('2o map', resp));
};
