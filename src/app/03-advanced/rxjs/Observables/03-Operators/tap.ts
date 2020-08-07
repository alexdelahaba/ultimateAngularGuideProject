import { range } from 'rxjs';
import { tap } from 'rxjs/operators';

export const operadorTap = () => {
  const numeros = range(1, 5);
  numeros.pipe(tap((resp) => console.log(resp))).subscribe();
};
