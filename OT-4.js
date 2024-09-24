/*
let idade =  15;

let categoria;

if (idade < 13) {
    categoria = 'criança';
} else if (idade >= 13 && idade <= 17) {
    categoria = 'adolescente';
} else if (idade >= 18 && idade <= 64) {
    categoria = 'adulto';
} else {
    categoria = 'idoso';
}

console.log("A sua idade é :"+ idade + " e  vc  é um " + categoria);
*/
/*
let numeroSecreto = Math.floor(Math.random() * 5) + 1;


let palpite = 1;


switch (palpite) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        if (palpite === numeroSecreto) {
            console.log("Parabéns! Você acertou. O número era " + numeroSecreto + ".");
        } else {
           console.log("Que pena! Você errou. O número era " + numeroSecreto + ".");
        }
        break;
    default:
        console.log("Por favor, insira um número válido entre 1 e 5.");
        break;
}
*/


let nota = 1;

let situacao;

switch(nota){
	
	case 0 :
			situacao = "reprovado";
		
	break;
	
	case 1:
		
			situacao = "reprovado";
		
	break;
	
	case 2 :
		
			
			situacao = "reprovado";
		
	break;
	
	case 3 :
		
		situacao = "reprovado";
	break;
	
	case 4 :
		
		situacao = "reprovado";
	break;
	
	case 5 :
		
		situacao = "reprovado";
	break;
	
	case 6 :
		
		situacao = "Recuperacao";
	break;
	
	case 7 :
		
		situacao = "Recuperacao";
	break;
	
	case 8 :
		
		situacao = "Aprovado";
	break;
	
	case 9 :
		
		situacao = "Aprovado";
	break;
	
	case 10 :
		
		situacao = "Aprovado";
	break;

}
console.log(situacao);