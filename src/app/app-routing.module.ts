import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlAttributesComponent } from './01-basic/html-attributes/html-attributes.component';

const routes: Routes = [
  // Implementación del lazy loading. A partir de haber puesto esta nomenclatura, todo lo del modulo básico tendrá un /basic delante
  {
    path: 'basic',
    loadChildren: () =>
      import('./01-basic/01-basic.module').then((m) => m.BasicModule),
  },
  {
    path: 'intermediate',
    loadChildren: () =>
      import('./02-intermediate/intermediate.module').then(
        (m) => m.IntermediateModule
      ),
  },
  {
    path: 'advanced',
    loadChildren: () =>
      import('./03-advanced/advanced.module').then((m) => m.AdvancedModule),
  },
  { path: '', component: HtmlAttributesComponent },
  { path: '**', component: HtmlAttributesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
