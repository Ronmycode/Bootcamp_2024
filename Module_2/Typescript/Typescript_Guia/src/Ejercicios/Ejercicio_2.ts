/* 
EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
Sumar
Restar
Multiplicar
Dividir
Potencia
Factorial
 */

class Calculadora {
  // Metodo 1 - Sumar
  sumar(a: number, b: number) {
    let total = a + b;
    console.log(total);
    return total;
  }
  // Metodo 2 - Restar
  restar(a: number, b: number) {
    let total = a - b;
    console.log(total);
    return total;
  }
  // Metodo 3 - Multiplicar
  multiplicar(a: number, b: number) {
    let total = a * b;
    console.log(total);
    return total;
  }
  // Metodo 4 - Dividir
  dividir(a: number, b: number) {
    if (a > b) {
      let total = a / b;
      console.log(total);
      return total;
    } else {
      console.log("el primer numero debe ser mayor al segundo");
    }
  }
  // Metodo 5 - Potencia
  potencia(a: number, b: number) {
    let total = Math.pow(a, b);
    console.log(total);
    return total;
  }
  // Metodo 6 - Factorial
  factorial(n: number) {
    let ans = 1;

    if (n === 0) return 1;
    for (let i = 2; i <= n; i++) ans = ans * i;
    console.log(ans);
    return ans;
  }
}

console.log(`
####################################################
################## Ejercicio # 2  ##################
####################################################`);

const Cal = new Calculadora();

Cal.sumar(3, 3);
Cal.restar(5, 2);
Cal.multiplicar(3, 2);
Cal.dividir(2, 5);
Cal.potencia(2, 4);
Cal.factorial(5);
