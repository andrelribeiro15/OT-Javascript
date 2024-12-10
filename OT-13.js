/*1
const soma = (a, b) => a + b;

const subtracao = (a, b) => a - b;


const multiplicacao = (a, b) => a * b;


const divisao = (a, b) => b !== 0 ? a / b : "Erro: Divisão por zero";

console.log(soma(5, 3));       
console.log(subtracao(10, 4));  
console.log(multiplicacao(2, 3)); 
console.log(divisao(10, 2));  
console.log(divisao(10, 0));   
*/

/*2
const saudacao = nome => `Olá, ${nome}! Seja bem-vindo(a)!`;

console.log(saudacao("João")); 
console.log(saudacao("Maria")); 
*/

/*3
let contador = 0;


const contadorInterval = setInterval(() => {
  console.log(contador);
  contador++; 

 
  if (contador > 9) {
    clearInterval(contadorInterval); 
    console.log("Contador finalizado");
  }
}, 1000);
*/

/*4
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numerosPares = numeros.filter(num => num % 2 === 0);


console.log(numerosPares); // [2, 4, 6, 8, 10]
*/

/*5
const celsiusParaFahrenheit = celsius => (celsius * 9/5) + 32;


console.log(celsiusParaFahrenheit(0));  
console.log(celsiusParaFahrenheit(25));  
console.log(celsiusParaFahrenheit(100)); 
*/

/*6
const ordenarAlfabeticamente = array => array.sort();


const frutas = ['Banana', 'Maçã', 'Laranja', 'Abacaxi', 'Uva'];
const frutasOrdenadas = ordenarAlfabeticamente(frutas);

console.log(frutasOrdenadas); 
*/