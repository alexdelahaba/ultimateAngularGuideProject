import {
  range,
  fromEvent,
  interval,
  of,
  merge,
  combineLatest,
  forkJoin,
} from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

//Operadores
const myObservableRange = range(1, 10);
const myObservableClick = fromEvent<MouseEvent>(document, 'click');
const myObservableKeyUp = fromEvent<KeyboardEvent>(document, 'keyup');
const myObservableInterval = interval(1000);
const myObservableNumerosRepetidos = of(1, 2, 1, 2, 2, 2, 3, 4, 4, 5, 1);

// ==================================
// Operador startWith
// ==================================
export const operadorstartWith = () => {
  myObservableRange.pipe(startWith('Jeje')).subscribe(console.log);
};

// ==================================
// Operador endWith
// ==================================
export const operadorendWith = () => {
  myObservableRange.pipe(endWith('Jeje')).subscribe(console.log);
};

// ==================================
// Operador merge
// ==================================
export const operadormerge = () => {
  merge(myObservableNumerosRepetidos, myObservableRange).subscribe(console.log);
};

// ==================================
// Operador combineLatest
// ==================================
export const operadorcombineLatest = () => {
  combineLatest(of('a', 'b', 'c', 'd'), myObservableRange).subscribe(
    console.log
  );
};

// ==================================
// Operador forkJoin
// ==================================
export const operadorforkJoin = () => {
  forkJoin(
    of('a', 'b', 'c', 'd'),
    myObservableRange,
    myObservableNumerosRepetidos
  ).subscribe(console.log);
};
