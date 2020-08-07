import { interval, timer } from 'rxjs';

const observer = {
  next: (val) => console.log(val),
  complete: () => console.log('completed'),
};
// ==================================
// Interval genera una emision cada x tiempo, siendo la x el parámetro de la funcion
// ==================================

export const creacionObservablesConInterval = () => {
  const src = interval(1000);
  src.subscribe(observer);
};

// ==================================
// Timer genera una única emision en el tiempo x, indicado por parámetro
// ==================================
export const creacionObservablesConTimer = () => {
  const src = timer(2000);
  src.subscribe(observer);
};
