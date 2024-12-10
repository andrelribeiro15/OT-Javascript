/*
const championship = 'Campeonato Paulista';


console.log(championship);

let teams = ['Palmeiras', 'São Paulo', 'Santos', 'Red Bull Bragantino', 'Corinthians'];
console.log(teams);

function showTeamPosition(posicao) {
    let teams = ['Palmeiras', 'São Paulo', 'Santos', 'Red Bull Bragantino', 'Corinthians'];
  
  
    if (posicao >= 1 && posicao <= 5) {
      return `O time que está em ${posicao}º lugar é o ${teams[posicao - 1]}.`;
    } else {
      return "Não temos a informação do time que está nessa posição.";
    }
  }
  

  console.log(showTeamPosition(1)); // "O time que está em 1º lugar é o Palmeiras."
  console.log(showTeamPosition(3)); // "O time que está em 3º lugar é o Santos."
  console.log(showTeamPosition(6)); // "Não temos a informação do time que está nessa posição."
 */

/*
let i = 20; 

while (i <= 30) {
  console.log(i); 
  i++;  
}
*/

function convertToHex(cor) {
    let hexColor;
  
    switch(cor.toLowerCase()) {
      case "red":
        hexColor = "#FF0000";
        break;
      case "green":
        hexColor = "#00FF00";
        break;
      case "blue":
        hexColor = "#0000FF";
        break;
      case "yellow":
        hexColor = "#FFFF00";
        break;
      case "purple":
        hexColor = "#800080";
        break;
      default:
        return `Não temos o equivalente hexadecimal para ${cor}.`;
    }
  
    return `O hexadecimal para a cor ${cor} é ${hexColor}.`;
  }
  
  
  console.log(convertToHex("red"));     
  console.log(convertToHex("yellow")); 
  console.log(convertToHex("pink"));    
  
