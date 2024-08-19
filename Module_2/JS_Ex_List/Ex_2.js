/* EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
 */
/* ### Definicion de variables */
/* let examen, tareas, asistencia, investigacion;
let nombre, carnet, nota_final;
 */
/* userInput(); */

/* ### Funciones ### */

/* Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30% */

/* nombre, carnet y nota final */

const datos = [
  {
    carnet: "12345",
    nombre: "Ronee Rodriguez",
    notas: [
      {
        Examen: 7,
        tareas: 8,
        asistencia: 10,
        investigacion: 9,
      },
    ],
  },
];

function notasApp(carnet) {
  // buscar carnet
  const estudiante = datos.find((estudiante) => estudiante.carnet === carnet);

  if (estudiante) {
    // Extraer las notas del objeto
    const notas = estudiante.notas[0]; // Adjust index if needed

    // Extract values and assign to variables
    const { Examen, tareas, asistencia, investigacion } = notas;
    /* Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30% */

    let notaFinal =
      Examen * 0.2 + tareas * 0.4 + asistencia * 0.1 + investigacion * 0.3;

    // Log the variables or return them
    console.log("Examen:", Examen);
    console.log("Tareas:", tareas);
    console.log("Asistencia:", asistencia);
    console.log("Investigacion:", investigacion);
    console.log("nota Final:", notaFinal);

    // Return the values if needed
    return { Examen, tareas, asistencia, investigacion };
  } else {
    console.log("Student not found");
    return null;
  }
}

const notasValues = notasApp("12345");
console.log(notasValues);

/* function notasApp(datos) { */
/* const Examen_1 = datos.find((ex) => (ex = Examen)); */
/* console.log(datos.nombre);
} */

/* Pruebas para tomar informacion desde la consola.. */
function userInput() {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Ingresa tu nombre: ", (nombre) => {
    console.log(`Hola ${nombre}`);
  }),
    rl.question("Presiona Enter para salir...", () => {
      readLineInterface.close();
      process.exit();
    });
}

function userInput() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Ingresa tu ${variables_preguntas[i]}: `, (nombre) => {
    console.log(`Hola ${nombre}`);
    readLineInterface.close();
    process.exit();
  });
}
let nombre;

let variables_preguntas = {
  pregunta: `ingresa tu ${nombre} : `,
  nombre: "",
};

cuestionario_app();
function cuestionario_app() {
  for (let i = 0; i < variables_preguntas.length; i++) {
    /* console.log(variables_preguntas[i]); */
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`Ingresa tu ${variables_preguntas[i]}: `, (nombre) => {
      console.log(`Hola ${nombre}`);
      readLineInterface.close();
      process.exit();
    });
  }
}
