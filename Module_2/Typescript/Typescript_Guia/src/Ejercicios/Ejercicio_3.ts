/* 
EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos: 
•	Crear un constructor que reciba como parámetros el título y género de la canción.
•	Utiliza los métodos get y set para recibir e imprimir la propiedad autor. 
•	Crea un método para mostrar los datos de la canción. 
 */

class Cancion {
  titulo: string;
  genero: string;
  private autor: string = "";

  /* creando un constructor */
  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
  }

  /* Metodos Get & Set */
  set setAutor(autor: string) {
    this.autor = autor;
  }
  get getAutor() {
    return this.autor;
  }

  /* imprimir Propiedades */
  imprimirPropiedades() {
    console.log(`Título: ${this.titulo}`);
    console.log(`Genero: ${this.genero}`);
    console.log(`Autor: ${this.autor}`);
  }
}

console.log(`
####################################################
################## Ejercicio # 3  ##################
####################################################`);

const addCancion = new Cancion("Salson Terrible", "salsa");
addCancion.setAutor = "Ronee Rodriguez";
addCancion.imprimirPropiedades();
