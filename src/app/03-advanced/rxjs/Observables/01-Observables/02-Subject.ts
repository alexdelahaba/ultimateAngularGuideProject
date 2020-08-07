import { Observable, Observer, Subject } from 'rxjs';

const funcion = () => {
  const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado'),
  };

  const intervalo$ = new Observable<number>((subs) => {
    const intervalID = setInterval(() => subs.next(Math.random()), 1000);

    return () => {
      clearInterval(intervalID);
      console.log('Intervalo destruido');
    };
  });

  // const subs1 = intervalo$.subscribe((resp) => console.log('1', resp));
  // const subs2 = intervalo$.subscribe((resp) => console.log('2', resp));
  // ==================================
  // Subject
  // ==================================
  const subject = new Subject();
  const subscription = intervalo$.subscribe(subject);
  const subs1 = subject.subscribe((resp) => console.log('1', resp));
  const subs2 = subject.subscribe((resp) => console.log('2', resp));

  setTimeout(() => {
    subject.next(10);
    subject.complete();
    subscription.unsubscribe();
  }, 3500);
};
