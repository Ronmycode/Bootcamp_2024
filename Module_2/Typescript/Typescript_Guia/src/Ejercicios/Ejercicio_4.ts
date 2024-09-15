class Cuenta {
  nombre: string;
  cantidad: number;
  tipoDeCuenta: "corriente" | "ahorros" | "empresarial";
  numeroDeCuenta: number;

  constructor(
    nombre: string,
    cantidad: number,
    tipoDeCuenta: "corriente" | "ahorros" | "empresarial",
    numeroDeCuenta: number
  ) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoDeCuenta = tipoDeCuenta;
    this.numeroDeCuenta = numeroDeCuenta;
  }
  depositar() {
    this.cantidad > 5
      ? console.log("deposito realizado con exito")
      : console.log("el valor debe ser mayor a $5");
  }
  retirar(valor: number) {
    if (valor > this.cantidad) {
      console.log("Fondos insuficientes");
    } else if (valor < 5) {
      console.log("el retiro debe ser mayor a $5.00");
    } else {
      console.log(
        `retiro total: $${valor}
saldo total: $${this.cantidad - valor}`
      );
    }
  }

  imprimirPropiedades() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Cantidad: $${this.cantidad}`);
    console.log(`Tipo de Cuenta: ${this.tipoDeCuenta}`);
    console.log(`Numero de Cuenta: ${this.numeroDeCuenta}`);
  }
}

const cliente1 = new Cuenta("Ronee Rodriguez", 100, "corriente", 12345);

console.log(`
####################################################
################## Ejercicio # 4  ##################
####################################################`);

cliente1.depositar();
cliente1.retirar(20);
cliente1.imprimirPropiedades();
