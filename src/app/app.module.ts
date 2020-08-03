import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingInterpolationComponent } from './01-basic/data-binding-interpolation/data-binding-interpolation.component';
import { FormsModule } from '@angular/forms';
import { HtmlAttributesComponent } from './01-basic/html-attributes/html-attributes.component';
import { StructuralDirectivesComponent } from './01-basic/structural-directives/structural-directives.component';
import { ParentChildComponent } from './01-basic/parent-child/parent-child.component';
import { ParentComponent } from './01-basic/parent-child/parent/parent.component';
import { ChildComponent } from './01-basic/parent-child/child/child.component';
import { PipesComponent } from './01-basic/pipes/pipes.component';
import { PersonalizadoPipe } from './01-basic/pipes/personalizado.pipe';
import { MilesToKmPipe } from './01-basic/pipes/milesToKmPipe.pipe';
import { MiClasePersonalizadaDirective } from './01-basic/structural-directives/mi-clase-personalizada.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingInterpolationComponent,
    HtmlAttributesComponent,
    StructuralDirectivesComponent,
    ParentChildComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    PersonalizadoPipe,
    MilesToKmPipe,
    MiClasePersonalizadaDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
