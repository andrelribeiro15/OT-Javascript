/*1
let lista1 = ["arroz", "feijão", "macarrão"];


let lista2 = ["tomate", "alface", "banana"];


let listaDeCompras = [...lista1, ...lista2];

console.log(listaDeCompras);
*/

/*2
let usuario = {
    nome: "Maria Silva",
    email: "maria@example.com"
  };
  
  
  let usuarioAtualizado = {
    ...usuario,       
    status: "ativo"   
  };
  
 
  console.log(usuarioAtualizado);
  */

/*3
function listaDeConvidados(...nomes) {
    console.log("Lista de convidados para a festa de aniversário:");
    nomes.forEach((nome, index) => {
      console.log(`${index + 1}. ${nome}`);
    });
  }
  

  listaDeConvidados("João", "Maria", "Carlos", "Ana", "Pedro");
  */

/*4
let playlistOriginal = ["Bohemian Rhapsody", "Imagine", "Stairway to Heaven", "Hey Jude"];


let playlistClonada = [...playlistOriginal];


playlistClonada[0] = "Smells Like Teen Spirit";

console.log("Playlist Original:", playlistOriginal);
console.log("Playlist Clonada:", playlistClonada);
*/

/*5
let filmeBasico = {
    titulo: "Inception",
    diretor: "Christopher Nolan"
  };
  
  let filmeComplementar = {
    ano: 2010,
    genero: "Sci-Fi"
  };
  
  let filme = {
    ...filmeBasico,
    ...filmeComplementar
  };
  
  console.log(filme);
  */

/*6
function criarMenu(entradas, pratosPrincipais, sobremesas) {
    let menuCompleto = [...entradas, ...pratosPrincipais, ...sobremesas];
    
    return menuCompleto;
  }
  
  let entradas = ["Salada Caesar", "Bruschetta", "Camarões ao alho"];
  let pratosPrincipais = ["Bife à parmegiana", "Frango grelhado", "Salmão com legumes"];
  let sobremesas = ["Tiramisu", "Pudim de leite condensado", "Cheesecake"];
  
  let menu = criarMenu(entradas, pratosPrincipais, sobremesas);
  
  console.log(menu);
  */