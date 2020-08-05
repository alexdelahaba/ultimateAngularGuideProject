import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor.interceptor';
import { GuardsComponent } from './guards/guards.component';
import { FakeComponentForGuardComponent } from './guards/fakeComponent/fake-component-for-guard.component';

@NgModule({
  declarations: [
    ReactiveFormsComponent,
    InterceptorsComponent,
    GuardsComponent,
    FakeComponentForGuardComponent,
  ],
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    // Ver video 301
    // El interceptor se importa en el módulo que vaya a ser usado
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AdvancedModule {}
