import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styles: [],
})
export class GuardsComponent implements OnInit, OnDestroy {
  logueado = 'false';
  randomNumber = 0;
  constructor() {}

  ngOnInit(): void {
    this.randomNumber = Math.round(Math.random() * 10);
    if (localStorage.getItem('loggued')) {
      this.logueado = localStorage.getItem('loggued');
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('loggued');
  }

  setearLogged() {
    this.logueado = 'true';
    localStorage.setItem('loggued', 'true');
  }
}
