import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const operacionesAjax = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  // Es una llamada Ajax clásica y normal
  ajax(url)
    // catchError => ver video 68FH
    // Permite atrapar error pero tambien permite emitir un evento para continuar con el observable original aunque se produzca un error
    .pipe(
      catchError((err: AjaxError) => {
        console.log(err);
        return of({});
      })
    )
    .subscribe((resp) => console.log(resp));
};

export const getJsonFuncion = () => {
  // El getJSON devuelve SOLO el cuerpo de la respuesta, tambien admite la inclusion de headers a la peticion
  const url = 'http://httpbin.org/delay/2';
  ajax
    .getJSON(url, { 'Content-type': 'miContentFavorito' })
    .subscribe((resp) => {
      console.log(resp);
    });
};

export const otrosVerbos = () => {
  const url = 'urlPrueba';
  const body = {};
  const headers = {};
  ajax.get(url);
  ajax.post(url, body, headers);
  ajax.put(url, body, headers);
  ajax.delete(url, headers);
};
