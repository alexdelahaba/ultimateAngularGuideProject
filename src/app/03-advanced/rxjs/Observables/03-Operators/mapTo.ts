import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export const operadorMapTo = () => {
  const keyupObservable = fromEvent(document, 'keyup');
  keyupObservable.pipe(mapTo('hola')).subscribe((resp) => console.log(resp));
};
