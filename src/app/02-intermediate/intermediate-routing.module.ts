import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { RoutingComponent } from './routing/routing.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { PlusRoutingChildRoutesComponent } from './plus-routing-child-routes/plus-routing-child-routes.component';
import { Child1Component } from './plus-routing-child-routes/children/child1.component';
import { Child2Component } from './plus-routing-child-routes/children/child2.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { DataHttpRequestsComponent } from './data-http-requests/data-http-requests.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
  { path: 'structural-directives', component: StructuralDirectivesComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'ng-content', component: NgContentComponent },
  { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
  { path: 'data-http', component: DataHttpRequestsComponent },
  { path: 'template-forms', component: TemplateFormsComponent },
  // Mediante la estructura de padre hijo en rutas lo que se pretende es hacer un render de x o y componente segun la url
  // El padre siempre se muestra y el hijo se muestra siguiendo las reglas clásicas del routing
  {
    path: 'plus-routing',
    component: PlusRoutingChildRoutesComponent,
    children: [
      { path: '', component: Child1Component },
      { path: 'first-child', component: Child1Component },
      { path: 'second-child', component: Child2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntermediateRoutingModule {}
