
/*
let carro = {
	
	marca : "Ferrari",
	modelo : "F40",
	ano : 1992,
	
	
	
	
	
}

console.log(carro.modelo);

*/

/*
let carro = {
	
	marca : "Ferrari",
	modelo : "F40",
	ano : 1992,
	
	

	
}

carro.ano = 1991;
carro.cor = "Vermelho";

console.log(Object.keys(carro));

	for(let txt in carro){
	
	console.log(txt,carro[txt]);
}
*/

/*
let calculadora = {
	
	//numero1 : 1,
	//numero2 : 2,
	
	soma: function(numero1,numero2){
		
	  return  numero1 + numero2;
	
	}
	
	
}	

let resultado = calculadora.soma(1,3);

console.log(resultado);

*/


let livro = {
	
	titulo : "Viagem",
	autor : "Andre"
	

}
console.log(livro.titulo);


let outroTitulo = livro;
outroTitulo.titulo = "Passeio";

console.log(livro.titulo)

console.log(Object.keys(livro));
console.log(Object.values(livro));