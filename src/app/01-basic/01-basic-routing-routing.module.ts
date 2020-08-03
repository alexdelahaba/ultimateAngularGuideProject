import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingInterpolationComponent } from './data-binding-interpolation/data-binding-interpolation.component';
import { HtmlAttributesComponent } from './html-attributes/html-attributes.component';

import { ParentChildComponent } from './parent-child/parent-child.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingInterpolationComponent },
  { path: 'html-attributes', component: HtmlAttributesComponent },
  { path: 'parent-child', component: ParentChildComponent },
  { path: 'pipes', component: PipesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicRoutingRoutingModule {}
