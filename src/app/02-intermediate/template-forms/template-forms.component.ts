import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styles: [],
})
export class TemplateFormsComponent implements OnInit {
  nombre = '';
  email = '';

  constructor() {}

  ngOnInit(): void {}

  submitForm(myTemplateForm: any) {
    console.log(myTemplateForm.form.value);
  }
}
