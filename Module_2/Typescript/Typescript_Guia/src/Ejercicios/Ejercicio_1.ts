/* EJERCICIO   1.  Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer
método que obtenga el título, color y fuente de la página, el segundo método que indique
como desea que aparezca el título si centrado, derecha o izquierda y el tercer método
que imprima todas las propiedades */

class CabeceraPagina {
  titulo: string = "";
  color: string = "";
  fuente: string = "";
  alineacion: "izquierda" | "centro" | "derecha";

  /* inicializando las cariables */
  constructor(
    titulo: string,
    color: string,
    fuente: string,
    alineacion: "izquierda" | "centro" | "derecha"
  ) {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
    this.alineacion = alineacion;
  }

  /* Metodo 1 */
  obtenerPropiedades() {
    return {
      titulo: this.titulo,
      color: this.color,
      fuente: this.fuente,
    };
  }

  /* Metodo 2 */

  establecerAlineacion(alineacionn: "izquierda" | "centro" | "derecha") {
    return (this.alineacion = alineacionn);
  }

  /* Metodo 3 */
  imprimirPropiedades() {
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuente}`);
    console.log(`Alineación: ${this.alineacion}`);
  }
}

/* ejecucion metodo 1 */
const cabecera = new CabeceraPagina("Cabecera", "rojo", "Arial", "centro");
let detalle = cabecera.obtenerPropiedades();
let alineado = cabecera.establecerAlineacion("izquierda");
cabecera.imprimirPropiedades();
console.log(alineado, detalle);
