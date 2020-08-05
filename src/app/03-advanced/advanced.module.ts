import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdvancedModule {}
