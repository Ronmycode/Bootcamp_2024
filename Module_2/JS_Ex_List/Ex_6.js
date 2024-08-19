/* EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando 
en cuenta lo siguiente: 
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
es Puerto el Triunfo el descuento será del 15%.
 */

let origen = "Palma",
  costaDelSol = "5% Off",
  panchimalco = "10% Off",
  puertoDelTriunfo = "15% Off";

const destino = [Palma, Panchimalco, "puerto"];

function desc_calc(origen, destino) {
  // calcular descuento
  if (origen === "Palma") {
    if (destino === costa) {
      console.log(`Su descuento es de: ${costaDelSol}`);
    } else if (destino === "Panchimalco") {
      console.log(`Su descuento es de: ${panchimalco}`);
    } else if (destino === "Puerto") {
      console.log(`Su descuento es de: ${puertoDelTriunfo}`);
    }
  } else {
    console.log("No hay descuento");
  }
}

desc_calc(Palma, costa);

// presentar datos
/*  console.log(
    `\nNombre: ${item.nombre}\nSalario: $${item.salario}\nCategoria: ${item.categoria}\nAumento: ${aumento}`
  );
 */
