import { asyncScheduler } from 'rxjs';

// ==================================
// El asyncScheduler genera una subscripcion
// Una subscripcion es el producto de observable.subscribe()
// ==================================

export const usarAsyncScheduler = () => {
  const saludar = () => {
    console.log('Hola');
  };

  const saludar2 = (nombre) => {
    console.log('Hola ' + nombre);
  };

  const saludar3 = ({ nombre, apellido }) => {
    console.log('Hola ' + nombre + ' ' + apellido);
  };

  // asyncScheduler.schedule(saludar, 2000);
  // asyncScheduler.schedule(saludar2, 2000, 'Alejandro');
  // asyncScheduler.schedule(saludar3, 2000, {
  //   nombre: 'Alejandro',
  //   apellido: 'Martinez',
  // });

  asyncScheduler.schedule(
    function (state) {
      console.log(state);
      this.schedule(state + 1, 1000);
    },
    3000,
    0
  );
};
