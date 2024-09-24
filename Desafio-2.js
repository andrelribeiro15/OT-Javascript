
/*
let soma = function(numero1, numero2){
	
	return numero1 + numero2;
}

let resultado = soma(1,1);
console.log(resultado);


let mais = soma(1,1)  ;

let resultado2 = mais + 5;

console.log(resultado2);
*/

/*
let valor;

console.log(valor);
let adicionar = function(numero){
	
	return numero;
}

valor = adicionar(1);

console.log("O valor da variavel é ", valor);

*/

/*
function calculo(numero1,numero2,numero3){
	
	if(numero1 === null){
		return "Preencha todos !"
		
	}else if(numero2 === null){
		return "Preencha todos !"
		
	}else if(numero3 == null){
		return "Preencha todos !"
		
	}else{
		
		return (numero1 * numero2 * numero3) + 2;
		
	}
}

//console.log(calculo(1,2,3));
//console.log(calculo(1,2));
*/

function ola(numero1, numero2, numero3) {
    if (numero1 !== undefined && numero2 === undefined && numero3 === undefined) {
        return numero1;
        
    } else if (numero1 !== undefined && numero2 !== undefined && numero3 === undefined) {
        return numero1 + numero2;
        
    } else if (numero1 !== undefined && numero2 !== undefined && numero3 !== undefined) {
        return (numero1 + numero2) / numero3;
        
    } else if (numero1 === undefined && numero2 === undefined && numero3 === undefined) {
        return false;
        
    } else {
        return null;
    }
}

// Exemplos de uso:
console.log(ola(1));         
console.log(ola(1, 2));      
console.log(ola(1, 2, 3));   
console.log(ola());         
console.log(ola(null));  
