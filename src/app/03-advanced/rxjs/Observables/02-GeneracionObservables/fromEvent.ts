import { fromEvent } from 'rxjs';

// ==================================
// Creacion de un observable mediante fromEvent
// ==================================
export const creacionConFromEvent = () => {
  const src1$ = fromEvent<MouseEvent>(document, 'click');
  const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

  const observer = {
    next: (val) => console.log(val),
  };
  src1$.subscribe(observer);
  src2$.subscribe(observer);
};
