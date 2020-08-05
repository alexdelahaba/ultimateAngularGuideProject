import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntermediateRoutingModule } from './intermediate-routing.module';
import { MiClasePersonalizadaDirective } from './structural-directives/mi-clase-personalizada.directive';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

import { FormsModule } from '@angular/forms';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ContenedorComponent } from './ng-content/contenedor/contenedor.component';
import { PlusRoutingChildRoutesComponent } from './plus-routing-child-routes/plus-routing-child-routes.component';
import { Child1Component } from './plus-routing-child-routes/children/child1.component';
import { Child2Component } from './plus-routing-child-routes/children/child2.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { DataHttpRequestsComponent } from './data-http-requests/data-http-requests.component';
import { ChildComponent } from './lifecycle-hooks/child/child.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

@NgModule({
  declarations: [
    MiClasePersonalizadaDirective,
    StructuralDirectivesComponent,
    NgContentComponent,
    ContenedorComponent,
    PlusRoutingChildRoutesComponent,
    Child1Component,
    Child2Component,
    LifecycleHooksComponent,
    DataHttpRequestsComponent,
    ChildComponent,
    TemplateFormsComponent,
  ],
  imports: [CommonModule, IntermediateRoutingModule, FormsModule],
  exports: [MiClasePersonalizadaDirective, StructuralDirectivesComponent],
})
export class IntermediateModule {}
