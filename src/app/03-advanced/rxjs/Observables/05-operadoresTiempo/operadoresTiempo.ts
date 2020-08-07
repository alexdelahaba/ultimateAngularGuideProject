import { fromEvent } from 'rxjs';
import {
  debounceTime,
  throttleTime,
  sampleTime,
  sample,
  auditTime,
} from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const keyup$ = fromEvent(document, 'keyup');

// ==================================
// Operador debounceTime
// ==================================
export const operadorDebounceTime = () => {
  keyup$.pipe(debounceTime(3000)).subscribe(console.log);
};

// ==================================
// Operador throttleTime
// ==================================
export const operadorthrottleTime = () => {
  keyup$.pipe(throttleTime(3000)).subscribe(console.log);
};

// ==================================
// Operador sampleTime
// ==================================
export const operadorsampleTime = () => {
  keyup$.pipe(sampleTime(3000)).subscribe(console.log);
};

// ==================================
// Operador sample
// ==================================
export const operadorsample = () => {
  keyup$.pipe(sample(click$)).subscribe(console.log);
};

// ==================================
// Operador auditTime
// ==================================
export const operadorauditTime = () => {
  keyup$.pipe(auditTime(2000)).subscribe(console.log);
};
