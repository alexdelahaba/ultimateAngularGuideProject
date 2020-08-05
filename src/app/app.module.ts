import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NVecesDirective } from './02-intermediate/structural-directives/n-veces.directive';
import { RoutingComponent } from './02-intermediate/routing/routing.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityComponent } from './03-advanced/security/security.component';
import { AuthInterceptor } from './03-advanced/interceptors/auth-interceptor.interceptor';

@NgModule({
  // Componentes, pipes, directivas... que pertenecen a este módulo
  declarations: [
    AppComponent,
    NVecesDirective,
    RoutingComponent,
    SecurityComponent,
  ],
  // Modulos que se importan a este y por tanto, incorporan todo lo exportado en esos modulos
  imports: [
    BrowserModule,
    // SE CARGAN MEDIANTE LAZY LOADING
    // BasicRoutingRoutingModule,
    // IntermediateRoutingModule,
    // El modulo de rutas que contenga la '' y la '**' debe estar el ultimo en la lista de imports, en este caso, el AppRoutingModule
    AppRoutingModule,
    FormsModule,
    // SE CARGAN MEDIANTE LAZY LOADING
    // BasicModule,
    // IntermediateModule,
    HttpClientModule,
  ],
  // Todo lo declarado en este módulo que después quiera ser usado en otro
  exports: [],
  // Ya no se usa
  providers: [],
  // Se usa en el appModule para saber cual es el componente de entrada a la app
  bootstrap: [AppComponent],
})
export class AppModule {}
