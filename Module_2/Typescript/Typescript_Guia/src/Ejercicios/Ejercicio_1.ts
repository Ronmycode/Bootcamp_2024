/* EJERCICIO   1.  Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer
método que obtenga el título, color y fuente de la página, el segundo método que indique
como desea que aparezca el título si centrado, derecha o izquierda y el tercer método
que imprima todas las propiedades */

class CabeceraPagina {
  titulo: string = "";
  color: string = "";
  fuente: string = "";
  alineado: string = "";

  /* Metodo 1 */
  obtenerPropiedades(
    titulo_parametro: string,
    color_parametro: string,
    fuente_parametro: string
  ) {
    return {
      titulo: titulo_parametro,
      color: color_parametro,
      fuente: fuente_parametro,
    };
  }

  /* Metodo 2 */
}

/* inicializando las cariables */
let cabecera = new CabeceraPagina();
/* ejecucion metodo 1 */
let detalle = cabecera.obtenerPropiedades(
  "titulo de cabecera",
  "rojo",
  "arial"
);

console.log(detalle);
