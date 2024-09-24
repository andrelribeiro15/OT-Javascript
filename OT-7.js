
/*
let livros = new Map();

livros.set("Narnia","Lewis" );
livros.set("Conjurador","Taran");
livros.set("Percy Jackson","Rick");

console.log(livros.get("Narnia"));


for(let [chave, valor] of livros){
	
	console.log(chave, valor);
}

console.log(livros.size);
livros.delete("Narnia");
console.log(livros.has("Narnia"));

*/

let colecao = new Map();

let objeto = "Objeto" ;

colecao.set(1, "valor1");
colecao.set("Teste", "texto");
colecao.set(objeto, "sucesso");

for(let [chave, valor] of colecao){
	
	console.log(chave, valor);
}
