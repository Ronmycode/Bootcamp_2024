/* EJERCICIO 9: 
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en 
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida” */

const tempC = Math.floor(Math.random() * 60 + 1);

const CtoF = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
const tempF = CtoF(tempC);

console.log("\nC°: " + tempC);
console.log("F°: " + tempF);

if ((tempF >= 14) & (tempF < 32)) {
  console.log("Temperatura baja");
} else if ((tempF >= 32) & (tempF < 68)) {
  console.log("Temperatura adecuada");
} else if ((tempF >= 68) & (tempF < 96)) {
  console.log("Temperatura alta");
} else {
  console.log("Temperatura desconocida");
}
