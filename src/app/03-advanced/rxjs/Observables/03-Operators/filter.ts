import { range, from } from 'rxjs';
import { filter } from 'rxjs/operators';

export const operadorFilter = () => {
  const myObservable = range(1, 10);
  // Solo devuelve los pares
  myObservable
    .pipe(
      filter((value, index) => {
        return value % 2 === 0;
      })
    )
    .subscribe((resp) => console.log(resp));
};
export const operadorFilter2 = () => {
  interface Personaje {
    tipo: string;
    nombre: string;
  }
  const personajes: Personaje[] = [
    { tipo: 'heroe', nombre: 'Batman' },
    { tipo: 'heroe', nombre: 'Robin' },
    { tipo: 'villano', nombre: 'Joker' },
  ];

  from(personajes)
    .pipe(filter((p) => p.tipo !== 'heroe'))
    .subscribe(console.log);
};
