export default function sintax() {
  //variables and const
  let name: string = "kenia";
  let age: number = 25;
  let decimal: number = 105.67;
  let isStudent: boolean = true;
  let nulo: null = null;

  // variable with more than one data type
  let valor: number | string;
  valor = "HI";
  console.log(`valor: ${valor}, Tipo de dato: ${typeof valor}`);
  valor = 50;
  console.log(`valor: ${valor}, Tipo de dato: ${typeof valor}`);
}
