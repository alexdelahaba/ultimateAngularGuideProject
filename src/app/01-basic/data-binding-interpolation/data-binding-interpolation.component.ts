import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-interpolation',
  templateUrl: './data-binding-interpolation.component.html',
  styleUrls: ['./data-binding-interpolation.component.css'],
})
export class DataBindingInterpolationComponent implements OnInit {
  password = '';
  email = 'example@gmail.com';
  recordarPassword = false;
  constructor() {}

  ngOnInit(): void {}

  devolverEmail() {
    console.log(this.email);
  }

  getEmail() {
    return this.email;
  }

  cambiarBooleano() {
    this.recordarPassword = !this.recordarPassword;
    console.log(this.recordarPassword);
  }

  imprimirDatosInput(event) {
    console.log(event);
    console.log(event.target.value);
  }

  imprimirVariables() {
    console.log('password', this.password);
    console.log('email', this.email);
    console.log('recordarPassword', this.recordarPassword);
  }
}
