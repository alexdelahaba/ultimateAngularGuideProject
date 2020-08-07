import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export const cadenaOperadores = () => {
  const keyupObservable = fromEvent<KeyboardEvent>(document, 'keyup');
  keyupObservable
    .pipe(
      map((event) => event.code),
      filter((key) => key === 'Enter')
    )
    .subscribe(console.log);
  console.log('Solo salta pulsando Enter');
};
