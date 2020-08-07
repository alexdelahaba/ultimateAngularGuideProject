import { Observable, Observer } from 'rxjs';
// ==================================
// Esquema basico de observables
// ==================================
let myObserver: Observer<any> = {
  next: (resp) => console.log('Next'),
  error: (err) => console.log('Error'),
  complete: () => console.log('Complete'),
};
let mySubscriber;
let observableEsquema = new Observable(mySubscriber).subscribe(myObserver);

// ==================================
// Ejemplo de observable creado manualmente con datos asíncronos e interfaz tipada al observable
// ==================================
interface Persona {
  name: string;
  edad: number;
}
export let observableObjetos = new Observable<Persona>((subscriber) => {
  subscriber.next({ name: 'Alejandro', edad: 25 });
  subscriber.next({ name: 'Pepe', edad: 29 });
  setTimeout(() => {
    subscriber.next({ name: 'Juan', edad: 45 });
  }, 1000);
  setTimeout(() => {
    subscriber.next({ name: 'Antonio', edad: 85 });
  }, 2500);
  setTimeout(() => {
    subscriber.next({ name: 'Domingo', edad: 47 });
  }, 6000);
  setTimeout(() => {
    subscriber.complete();
  }, 6001);
});

// ==================================
// Observable básico que emite un 1
// ==================================
export const creacionManualObservable = () => {
  // Conceptos => observable.subscribe(observer);
  const observable = new Observable<number>((subscriber) => {
    // Emision del valor 1
    subscriber.next(1);

    // Si se ejecuta, significa que no hay mas data que emitir y que el observable se ha completado
    subscriber.complete();

    // Lanza un error al pipeline
    subscriber.error(new Error('Se ha producido un error'));
  });

  // ---
  observable.subscribe({
    next(value) {
      console.log('next', value);
    },
    complete() {
      console.log('Observable completado, no se esperan mas datos.');
    },
    error(err) {
      console.log('error', err);
    },
  });
  // ---
  // Otra forma de trabajar con observer =>
  observable.subscribe(
    (value) => console.log('observer type 2', value),
    (err) => console.log('error observer type 2', err),
    () =>
      console.log('Observable completado, no se esperan mas datos. (type 2)')
  );
};

// ==================================
// Observable que va contando cada segundo y aumentando un contador
// ==================================
const observableContador = () => {
  const intervalo = new Observable<number>((subscriber) => {
    let contador = 0;
    setInterval(() => {
      subscriber.next((contador = contador + 0.5));
    }, 500);
  });

  let observacion = intervalo.subscribe((num) => console.log(num));

  setTimeout(() => {
    observacion.unsubscribe();
    console.log('Desubscrito');
  }, 8000);
};
