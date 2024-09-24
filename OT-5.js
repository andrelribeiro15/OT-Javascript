/*
function calcular(num1,num2){
	
	return num1 * num2
}

let resultado = calcular(1,2);
console.log(resultado);
*/
/*
function verificar(num){
	
	if(num % 2 == 0 ){
		
		return true;
	}else{
		
		return false;
	}
}

let resultado = verificar(5);
console.log(resultado);
*/

/*
function converter(polegadas) {
   let centimetrosPorPolegada = 2.54;
    return polegadas * centimetrosPorPolegada;
}


let polegadas = 10;
let centimetros = converter(polegadas);
console.log(polegadas + " polegadas é igual a " + centimetros +" centímetros.");
*/

/*

function calcularIMC(peso, altura) {
   
   let imc = peso / (altura * altura);
    return imc.toFixed(2);
}



let imc = calcularIMC(70, 1,75);
console.log("O IMC é " + imc );
*/

/*
function transforma(string) {
    return string.toLowerCase();
}


let texto = "Olá, MUNDO!";
let  minusculo = transforma(texto);
console.log(minusculo); 
*/



let multiplica = (numero) => numero * 10;

let numero = 1;
let resultado = multiplica(numero);

console.log(resultado);
