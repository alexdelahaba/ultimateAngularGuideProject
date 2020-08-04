import { Component } from '@angular/core';
import { Car, Persona, Animal } from './class/classes';
import { Film } from './interface/interfaces';

@Component({
  selector: 'app-class-interface',
  templateUrl: './class-interface.component.html',
  styleUrls: ['./class-interface.component.css'],
})
export class ClassInterfaceComponent {
  car = new Car();
  persona = new Persona(undefined, 'varon');
  animal = new Animal(8);
  film: Film;

  constructor() {
    this.film = {
      director: 'juan',
      actor: {
        nombre: 'Brad',
        edad: 50,
      },
    };
  }

  printObjetos() {
    this.car.devolverAtributos();
    this.persona.devolverAtributos();
    this.animal.devolverAtributos();
    console.log(this.film);
    console.log(this.car.getValorPrecio);
    //   const precioCoche = this.car.valorPrecio;
    //   console.log(precioCoche);
  }

  cambiarValoresClases() {
    this.car.color = 'granate';
    this.persona.cambiarEdad(80);
    this.animal.asignarValor4APatas();
    this.film.actor.nombre = 'Leo';
    this.car.setValorPrecio = 876541;
  }
}
