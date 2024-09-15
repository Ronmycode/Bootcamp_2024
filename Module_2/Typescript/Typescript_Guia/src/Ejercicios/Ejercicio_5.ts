abstract class Persona {
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: number;
  edad: number;
  constructor(
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: number,
    edad: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
    } else {
      console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
    }
  }

  abstract mostrarDatos(): void;
}

class Empleado extends Persona {
  sueldo: number;

  constructor(
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: number,
    edad: number,
    sueldo: number
  ) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
  }

  public cargarSueldo(sueldo: number) {
    this.sueldo = sueldo;
  }

  public imprimirSueldo() {
    console.log(`Sueldo: $${this.sueldo}`);
  }

  public mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Dirección: ${this.direccion}`);
    console.log(`Teléfono: ${this.telefono}`);
    console.log(`Edad: ${this.edad}`);
  }
}

console.log(`
    ####################################################
    ################## Ejercicio # 5  ##################
    ####################################################`);

const empleado = new Empleado("Ronee", "Rodriguez", "123", 5551234, 30, 1500);

empleado.mostrarDatos();

empleado.esMayorDeEdad();

empleado.imprimirSueldo();
