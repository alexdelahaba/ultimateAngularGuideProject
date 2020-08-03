import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingInterpolationComponent } from './01-basic/data-binding-interpolation/data-binding-interpolation.component';
import { HtmlAttributesComponent } from './01-basic/html-attributes/html-attributes.component';
import { StructuralDirectivesComponent } from './01-basic/structural-directives/structural-directives.component';
import { ParentChildComponent } from './01-basic/parent-child/parent-child.component';
import { PipesComponent } from './01-basic/pipes/pipes.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingInterpolationComponent },
  { path: 'html-attributes', component: HtmlAttributesComponent },
  { path: 'structural-directives', component: StructuralDirectivesComponent },
  { path: 'parent-child', component: ParentChildComponent },
  { path: 'pipes', component: PipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
