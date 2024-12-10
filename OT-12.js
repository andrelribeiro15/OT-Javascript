
/*1
let frutas = ["Maçã", "Banana", "Laranja"];

let [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1); 
console.log(fruta2); 
console.log(fruta3); 
*/


/*2
let pessoa = {
    nome: "João",
    idade: 25
  };
  
  
  let { nome, idade } = pessoa;
  
  
  console.log(nome);  
  console.log(idade); 
  */

  /*3
function exibirInformacoes({ nome, idade, cidade }) {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Cidade: ${cidade}`);
  }
  
  let pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "São Paulo"
  };
  
  exibirInformacoes(pessoa);
   */

/*4
let estudantes = [
    ["João", 18, "Matemática"],
    ["Maria", 20, "Física"],
    ["Carlos", 22, "Química"]
  ];
  

  let [[nome1, idade1, curso1], [nome2, idade2, curso2], [nome3, idade3, curso3]] = estudantes;
  
  
  console.log(nome1, idade1, curso1); 
  console.log(nome2, idade2, curso2); 
  console.log(nome3, idade3, curso3); 
  */


  /*5
let numeros = [10];


let [numero1, numero2 = 5] = numeros;


console.log(numero1); 
console.log(numero2); 
*/


/*6
let a = 5;
let b = 10;


[a, b] = [b, a];

console.log(a); 
console.log(b); 
*/