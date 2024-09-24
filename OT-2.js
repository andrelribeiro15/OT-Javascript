let animais = [];

animais.push("Cachorro","Gato","Cavalo");

console.log(animais);

animais.shift();

console.log(animais);

animais.unshift("Passaro","Tartaruga");

console.log(animais);

animais[1]  = "Girafa";

console.log(animais);

let frutas = ["Maca","Laranja","Melancia"];

let tdFruta = frutas.length;

console.log(tdFruta);

for(let i=0; i<frutas.length; i++){
	
	console.log(frutas[i]);
}