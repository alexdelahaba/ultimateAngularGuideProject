import { range } from 'rxjs';
import { reduce } from 'rxjs/operators';

export const operadorReduce = () => {
  const myObservable = range(1, 5);

  const myReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
  };
  // El reduce recibe una primera funcion que tiene que mantener la nomenclatura que tiene esta y como segundo argumento se puede pasar el primer valor que toma la funcion
  myObservable
    .pipe(reduce(myReducer, 17))
    .subscribe((resp) => console.log(resp)); // 15 + 17
};
