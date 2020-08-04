import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  // Importar el HttpClientModule en el app module
  // import { HttpClientModule } from '@angular/common/http';
  constructor(private http: HttpClient) {}
  misParams = {
    miParametroPreferido: 'valorDelParametro',
    format: 'json',
  };
  misHeaders = {
    miHeader: 'valorDelHeader',
    otroHeader: 'valorDelOtroHeader',
  };

  url = 'https://jsonplaceholder.typicode.com/posts';

  peticionGetSimple() {
    return this.http.get(this.url);
  }

  peticionGetCompleta() {
    return this.http.get(this.url, {
      params: this.misParams,
      headers: this.misHeaders,
    });
  }

  peticionPost() {
    const objetoAEnviar = {
      atributo1: 'valor1',
      atributo2: 55,
    };
    return this.http.post(this.url, objetoAEnviar, {
      params: this.misParams,
      headers: this.misHeaders,
    });
  }

  peticionDelete() {
    return this.http.delete(this.url, {
      params: this.misParams,
      headers: this.misHeaders,
    });
  }

  peticionPut() {
    const objetoAEnviar = {
      atributo1: 'valor1',
      atributo2: 55,
    };
    return this.http.put(this.url, objetoAEnviar, {
      params: this.misParams,
      headers: this.misHeaders,
    });
  }
}
