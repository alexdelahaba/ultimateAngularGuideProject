import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructuralDirectivesComponent } from './02-intermediate/structural-directives/structural-directives.component';

const routes: Routes = [
  { path: 'structural-directives', component: StructuralDirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
