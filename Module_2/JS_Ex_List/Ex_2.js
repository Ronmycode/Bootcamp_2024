/* EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
 */

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
    const notas = estudiante.notas[0];
    // extraer datos y asignarlos a variables
    const { Examen, tareas, asistencia, investigacion } = notas;
    // calcular nota final
    let notaFinal =
      Examen * 0.2 + tareas * 0.4 + asistencia * 0.1 + investigacion * 0.3;

    console.log(`
      ######################################\n
      Nombre: ${estudiante.nombre}\n
      Carnet: ${carnet}\n
      Nota Final: ${notaFinal}\n
      #######################################
      `);
  } else {
    console.log("No se econtro al estudiante..");
    return null;
  }
}

const notasRon = notasApp("12345");
console.log(notasRon);
