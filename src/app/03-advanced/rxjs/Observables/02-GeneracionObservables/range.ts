import { range, asyncScheduler } from 'rxjs';
// ==================================
// Crea un observable que emite los datos indicados por params
// range(start = 0, count, asyncScheduler)
// ==================================
export const creacionObservablesConRange = () => {
  const src = range(20, 15, asyncScheduler);
  src.subscribe((resp) => console.log(resp));
};
