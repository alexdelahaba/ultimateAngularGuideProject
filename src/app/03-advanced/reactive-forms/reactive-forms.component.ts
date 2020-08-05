import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styles: [],
})
export class ReactiveFormsComponent implements OnInit {
  opcionesSelect = ['Madrid', 'Barça', 'Córdoba'];
  opcionesSelectMultiple = ['verano', 'invierno', 'primavera', 'otonio'];
  // ############################
  // Formulario simple
  simpleForm = new FormGroup({
    name: new FormControl('Nombre por defecto', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });
  // ############################
  // Formulario Complejo
  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    edad: new FormControl(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(65),
      Validators.pattern(/\d/),
    ]),
    comentario: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
    equipoFutbol: new FormControl('', [Validators.required]),
    estaciones: new FormGroup(
      {
        verano: new FormControl(false, []),
        invierno: new FormControl(false, []),
        primavera: new FormControl(false, []),
        otonio: new FormControl(false, []),
      },
      { validators: [this.validacionEstaciones] }
    ),
    sexo: new FormControl('', [Validators.required]),
    empresa: new FormControl('', [this.validacionEmpresa]),
    fechaHoy: new FormControl('', [Validators.required, this.validacionFecha]),
  });

  // Estados de un form => ver helpingTxts/forms

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  imprimirSimpleForm() {
    console.log(this.simpleForm);
  }

  imprimirComplexForm() {
    console.log(this.complexForm);
  }

  imprimirOpcion(opcion: string) {
    console.log(opcion);
  }

  validacionEstaciones(form: any) {
    if (
      form.controls.verano.value ||
      form.controls.invierno.value ||
      form.controls.primavera.value ||
      form.controls.otonio.value
    ) {
      return null;
    } else {
      return { estacionesValid: false };
    }
  }

  validacionEmpresa(form: any) {
    const valorInput = form.value;
    if (!valorInput) {
      return { falsyData: true };
    } else if (valorInput.length < 5) {
      return { tooSmall: true };
    } else if (valorInput.length > 7) {
      return { tooLong: true };
    } else {
      return null;
    }
  }

  validacionFecha(form: any) {
    const dateGiven = new Date(form.value);
    const today = new Date();
    if (dateGiven > today) {
      return null;
    } else {
      return { fechaPosteriorAHoy: true };
    }
  }

  submitComplexForm() {
    if (this.complexForm.valid) {
      console.log(this.complexForm.value);
      console.log('submited');
    }
  }

  resetForm() {
    this.complexForm.reset();
  }
}
