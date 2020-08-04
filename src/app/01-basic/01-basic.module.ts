import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingInterpolationComponent } from './data-binding-interpolation/data-binding-interpolation.component';
import { HtmlAttributesComponent } from './html-attributes/html-attributes.component';

import { ParentChildComponent } from './parent-child/parent-child.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { PersonalizadoPipe } from './pipes/personalizado.pipe';
import { MilesToKmPipe } from './pipes/milesToKmPipe.pipe';
import { FormsModule } from '@angular/forms';
import { BasicRoutingRoutingModule } from './01-basic-routing-routing.module';
import { ClassInterfaceComponent } from './class-interface/class-interface.component';
@NgModule({
  declarations: [
    DataBindingInterpolationComponent,
    HtmlAttributesComponent,
    ParentChildComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    PersonalizadoPipe,
    MilesToKmPipe,
    ClassInterfaceComponent,
  ],
  imports: [CommonModule, FormsModule, BasicRoutingRoutingModule],
  exports: [
    DataBindingInterpolationComponent,
    HtmlAttributesComponent,
    ParentChildComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    PersonalizadoPipe,
    MilesToKmPipe,
  ],
})
export class BasicModule {}
