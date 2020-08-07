import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';
// ==================================
// Recibe como argumento un atributo del objeto y criba para devolver solo ese argumento, si el atributo está anidado,
// el argumento de la función sería así pluck("coche", "marca") para el objeto {coche:{marca: "renault"}
// ==================================

export const operadorPluck = () => {
  const keyupObservable = fromEvent(document, 'keyup');
  keyupObservable.pipe(pluck('key')).subscribe((resp) => console.log(resp));
};
