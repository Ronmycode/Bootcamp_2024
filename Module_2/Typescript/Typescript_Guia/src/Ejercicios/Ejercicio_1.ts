/* EJERCICIO   1.  Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer
método que obtenga el título, color y fuente de la página, el segundo método que indique
como desea que aparezca el título si centrado, derecha o izquierda y el tercer método
que imprima todas las propiedades */

class CabeceraPagina {
  titulo: string = "";
  color: string = "";
  fuente: string = "";

  obtenerPropiedades(
    titulo_parametro: string,
    color_parametro: string,
    fuente_parametro: string
  ) {
    return {
      titulo_parametro: this.titulo,
      color_parametro: this.titulo,
      fuente_parametro: this.fuente,
    };
  }
}

let cabecera = new CabeceraPagina();
let detalle = cabecera.obtenerPropiedades(
  "titulo de cabecera",
  "rojo",
  "arial"
);

console.log(detalle);
