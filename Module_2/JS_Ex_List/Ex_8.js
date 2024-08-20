/* EJERCICIO 8: 
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado 
por el usuario */

const randomInput = Math.floor(Math.random() * 10 + 1);
console.log(`\nInput del usuario: ${randomInput}`);

let count = 1;

while (count <= 10) {
  let tabla = randomInput * count;
  console.log(`${count} X ${randomInput} = ${tabla} `);
  count++;
}
