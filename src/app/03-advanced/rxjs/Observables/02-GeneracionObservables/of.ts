import { of } from 'rxjs';

// ==================================
// El of retorna un observable que emite cada uno de los
// parámetros de la función como eventos de manera síncrona
// cuando emite el ultimo valor, se ejecuta el complete()
// ==================================
export const creacionMedianteOfObservable = () => {
  const myObservable = of<number>(1, 2, 3, 4, 5, 6);
  myObservable.subscribe(
    (resp) => console.log(resp),
    (err) => console.log(err),
    () => console.log('Terminó')
  );
};
