/* EJERCICIO   1.  Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer
método que obtenga el título, color y fuente de la página, el segundo método que indique
como desea que aparezca el título si centrado, derecha o izquierda y el tercer método
que imprima todas las propiedades */

class CabeceraPagina {
  titulo: string;
  color: string;
  fuente: string;

  obtenerPropiedades(titulo, clr: string, fuente): { color: string } {
    return [(color = clr)];
  }
}

let cabecera = new CabeceraPagina();

cabecera.titulo = "titulo de cabecera";

console.log(cabecera.titulo);
