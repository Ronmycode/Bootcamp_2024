/* Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y 
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20%
 */

const empleados_db = [
  {
    empleado: 12345,
    nombre: "Michael Scott",
    salario: 1500,
    categoria: "A",
  },
  {
    empleado: 23456,
    nombre: "Jim Halpert",
    salario: 900,
    categoria: "B",
  },
  {
    empleado: 34567,
    nombre: "Dwight Schrute",
    salario: 800,
    categoria: "C",
  },
  {
    empleado: 45678,
    nombre: "Creed Bratton",
    salario: 700,
    categoria: "D",
  },
];

const cat_A = 0.15,
  cat_B = 0.3,
  cat_C = 0.1,
  cat_D = 0.2;

empleados_db.forEach((item) => {
  let aumento = 0;

  // calcular aumento
  if (item.categoria === "A") {
    // aumento a categoria 'A'
    aumento = item.salario * cat_A;
  } else if (item.categoria === "B") {
    aumento = item.salario * cat_B;
  } else if (item.categoria === "C") {
    aumento = item.salario * cat_C;
  } else if (item.categoria === "D") {
    aumento = item.salario * cat_D;
  }
  // presentar datos
  console.log(
    `\nNombre: ${item.nombre}\nSalario: $${item.salario}\nCategoria: ${item.categoria}\nAumento: ${aumento}`
  );
  console.log("-------------------------"); // Separator for clarity
});
