import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { StructuralDirectivesComponent } from './02-intermediate/structural-directives/structural-directives.component';
import { MiClasePersonalizadaDirective } from './02-intermediate/structural-directives/mi-clase-personalizada.directive';
import { NVecesDirective } from './02-intermediate/structural-directives/n-veces.directive';
import { BasicModule } from './01-basic/01-basic.module';
import { BasicRoutingRoutingModule } from './01-basic/01-basic-routing-routing.module';

@NgModule({
  //Componentes, pipes, directivas... que pertenecen a este módulo
  declarations: [
    AppComponent,
    MiClasePersonalizadaDirective,
    NVecesDirective,
    StructuralDirectivesComponent,
  ],
  //Modulos que se importan a este y por tanto, incorporan todo lo exportado en esos modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicRoutingRoutingModule,
    FormsModule,
    BasicModule,
  ],
  //Todo lo declarado en este módulo que después quiera ser usado en otro
  exports: [],
  //Ya no se usa
  providers: [],
  //Se usa en el appModule para saber cual es el componente de entrada a la app
  bootstrap: [AppComponent],
})
export class AppModule {}
