/* EJERCICIO 7: 
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: 
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */

const createRandomIntegerArray = () => {
  const randomArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 200) - 100
  );
  return randomArray;
};

const filtroArray = (arr) => {
  const conteo = {
    negativos: 0,
    positivos: 0,
    multiplosde15: 0,
    pares: 0,
  };

  arr.forEach((num) => {
    if (num < 0) {
      conteo.negativos++;
    } else if (num > 0) {
      conteo.positivos++;
    }

    if (num % 15 === 0) {
      conteo.multiplosde15++;
    }

    if (num % 2 === 0) {
      conteo.pares += num;
    }
  });

  return conteo;
};

// Presentar datos en consola
const userinput = createRandomIntegerArray();
console.log(`Valores ingresados por el usuario: ${userinput}`);
console.log(filtroArray(userinput));
