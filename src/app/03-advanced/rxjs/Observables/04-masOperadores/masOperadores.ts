import { range, interval, of, fromEvent, from } from 'rxjs';
import {
  take,
  first,
  takeWhile,
  takeUntil,
  skip,
  distinct,
  distinctUntilChanged,
  tap,
  distinctUntilKeyChanged,
} from 'rxjs/operators';

// Observables para trabajar
const myObservableRange = range(1, 10);
const myObservableClick = fromEvent<MouseEvent>(document, 'click');
const myObservableKeyUp = fromEvent<KeyboardEvent>(document, 'keyup');
const myObservableInterval = interval(1000);
const myObservableNumerosRepetidos = of(1, 2, 1, 2, 2, 2, 3, 4, 4, 5, 1);

// ==================================
// Operador take
// ==================================
export const operadorTake = () => {
  myObservableRange.pipe(take(3)).subscribe(console.log);
};

// ==================================
// Operador first
// ==================================
export const operadorFirst = () => {
  myObservableRange.pipe(first()).subscribe(console.log);
  myObservableRange.pipe(first((elto) => elto > 4)).subscribe(console.log);
};

// ==================================
// Operador takeWhile
// ==================================
export const operadorTakeWhile = () => {
  myObservableRange
    .pipe(takeWhile((value) => value < 7))
    .subscribe(console.log);
};

// ==================================
// Operador takeUntil
// ==================================

export const operadorTakeUntil = () => {
  myObservableInterval
    .pipe(takeUntil(myObservableKeyUp))
    .subscribe(() => console.log('Hola'));
};

// ==================================
// Operador skip
// ==================================

export const operadorSkip = () => {
  myObservableRange.pipe(skip(4)).subscribe(console.log);
};

// ==================================
// Operador distinct
// ==================================

export const operadorDistinct = () => {
  let salida = [];
  myObservableNumerosRepetidos
    .pipe(
      distinct(),
      tap((value) => salida.push(value))
    )
    .subscribe();
  console.log(salida);
};

// ==================================
// Operador distinctUntilChanged
// ==================================
export const operadorDistinctUntilChanged = () => {
  let salida = [];
  myObservableNumerosRepetidos
    .pipe(
      distinctUntilChanged(),
      tap((value) => salida.push(value))
    )
    .subscribe();
  console.log(salida);
};

// ==================================
// Operador distinctUntilKeyChanged
// ==================================
export const operadorDistinctUntilKeyChanged = () => {
  const observable = from([
    { valor: 1 },
    { valor: 1 },
    { valor: 2 },
    { valor: 3 },
    { valor: 2 },
    { valor: 17 },
    { valor: 17 },
  ]);
  let salida = [];
  observable
    .pipe(
      distinctUntilKeyChanged('valor'),
      tap((value) => salida.push(value))
    )
    .subscribe();
  console.log(salida);
};
