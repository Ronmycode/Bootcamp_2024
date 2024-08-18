/* EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
 */

function chequeo_edad(edad) {
  const edadMenor = "Ud es menor de edad";
  const edadMayor = "Ud es mayor de edad";
  return edad < 18 ? edadMenor : edadMayor;
}

console.log(chequeo_edad(17));
