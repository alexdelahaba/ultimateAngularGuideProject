export class funcionesGenericas {
  devolverAtributos() {
    console.log(this);
  }
}

export class Car extends funcionesGenericas {
  patas: number = 4;
  color: string = 'madera';
  private precio = 20000;
  public get getValorPrecio(): number {
    return this.precio;
  }
  public set setValorPrecio(precio: number) {
    this.precio = precio;
  }
}

export class Persona extends funcionesGenericas {
  edad: number;
  sexo: string;
  constructor(edadPersona: number = 30, sexo: string) {
    super();
    this.edad = edadPersona;
    this.sexo = sexo;
  }
  cambiarEdad(edad: number) {
    this.edad = edad;
  }
}

export class Animal extends funcionesGenericas {
  patas: number;
  constructor(patas?: number) {
    super();
    if (patas) {
      this.patas = patas;
    }
  }
  asignarValor4APatas() {
    this.patas = 4;
  }
}
