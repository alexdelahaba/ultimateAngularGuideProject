import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  // Se necesita una importacion tanto del HttpClientModule como del HTTP_INTERCEPTORS (VER MODULO)
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes('jsonplaceholder')) {
      console.log('estoy entrando');
      const modRequest = request.clone({
        reportProgress: true,
        setParams: {
          miParamPersonalizado: 'MiValor',
        },
        setHeaders: {
          miHeaderFavorito: 'Este header',
        },
        body: {
          token: 'shdgfuesgfhgdsf653476234',
        },
      });

      console.log(modRequest);
      return next.handle(modRequest);
    } else {
      return next.handle(request);
    }
  }
}
