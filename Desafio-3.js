
//let exemplo  ={};

/*
let pessoa = {
	
	nome:"André" ,
	sobrenome:"Ribeiro" ,
	sexo:"masculino" ,
	idade: 23 ,
	altura:1.80 ,
	peso: 75 ,
	andando: false ,
	caminhouQuantosMetros:0 ,
	
	
	fazerAniversario: function(){
		
		this.idade +=1;
	},
	
	andar: function(metros){
		
		this.caminhouQuantosMetros += metros;
		this.andando = true;
	},
	
	parar: function(){
		
		this.andando = false;
	},
	
	nomeCompleto: function(){
		
		return "Olá meu nome completo é " + this.nome + this.sobrenome;
	},
	
	mostrarIdade: function(){
		
		return "Olá eu tenho " + this.idade + " anos";
	},
	
	mostrarPeso:function(){
		
		return "Eu peso " + this.peso + " KG";
	},
	
	mostrarAltura: function(){
		
		return "Minha altura é " + this.altura + " m";
	}
};

console.log(pessoa);
for(let i =0; i<3; i++){
pessoa.fazerAniversario();
};
//pessoa.fazerAniversario();
//pessoa.fazerAniversario();
console.log(pessoa);
/*
for(let i=0; i<3; i++){
pessoa.andar(5,1,3);
}
*/
/*
pessoa.andar(10);
pessoa.andar(5);
pessoa.andar(1);
if(pessoa.andando){
	pessoa.andando = false;
}
console.log(pessoa.andando);
console.log(pessoa.caminhouQuantosMetros);
console.log(pessoa.nomeCompleto());
console.log(pessoa.mostrarIdade());
console.log(pessoa.mostrarPeso());
console.log(pessoa.mostrarAltura());

*/

let pessoa = {
    nome: "André",
    sobrenome: "Ribeiro",
    sexo: "Masculino",
    idade: 23,
    altura: 1.75,
    peso: 75,
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversario: function() {
        this.idade += 1;
    },
    andar: function(metros) {
        this.caminhouQuantosMetros += metros;
        this.andando = true;
    },
    nomeCompleto: function() {
        return " Meu nome é "+ this.nome  + " " + this.sobrenome;
    },
    apresentacao: function() {
      
       let artigo = this.sexo === "Feminino" ? "a" : "o"; 
        let anoOuAnos = this.idade === 1 ? "ano" : "anos"; 
       let metroOuMetros = this.caminhouQuantosMetros === 1 ? "metro" : "metros"; 

      
        return " Olá, eu sou " + artigo + this.nomeCompleto() + " tenho " + this.idade +" "+ anoOuAnos + " " +
               this.altura + " m " +  " meu peso é " + this.peso + " kg " +  " e, só hoje, eu já caminhei " +
               this.caminhouQuantosMetros + " " + metroOuMetros;
    }
};


console.log(pessoa.apresentacao());




