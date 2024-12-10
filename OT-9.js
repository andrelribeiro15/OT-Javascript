/*
class Animal {
    constructor(nome, som) {
      this.nome = nome; 
      this.som = som;   
    }
  
    falar() {
      console.log(`${this.nome} faz: ${this.som}`);
    }
  }
  
  // Exemplo de uso
  const cachorro = new Animal('Cachorro', 'au au');
  cachorro.falar(); 
  
  const gato = new Animal('Gato', 'miau');
  gato.falar(); 
*/
/*
class Veiculo {
    constructor(marca, modelo, velocidadeMaxima) {
      this.marca = marca; 
      this.modelo = modelo; 
      this.velocidadeMaxima = velocidadeMaxima; 
    }
  
    descrever() {
      console.log(
        `O veículo é um ${this.marca} ${this.modelo} com velocidade máxima de ${this.velocidadeMaxima} km/h.`
      );
    }
  }
  
  
  const carro = new Veiculo('Toyota', 'Corolla', 180);
  carro.descrever(); 
  
  const moto = new Veiculo('Honda', 'CB500X', 190);
  moto.descrever(); 
*/
/*
class Estudante {
    constructor(nome, notas) {
      this.nome = nome; 
      this.notas = notas; 
    }
  
    calcularMedia() {
      if (this.notas.length === 0) {
        return 0; 
      }
  
      const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
      return soma / this.notas.length; 
    }
  
    descrever() {
      const media = this.calcularMedia().toFixed(2); 
      console.log(`O estudante ${this.nome} tem uma média de ${media}.`);
    }
  }
  
  // Exemplo de uso
  const estudante1 = new Estudante('João', [8, 9, 7, 10]);
  est
  
*/
/*
class Utilitario {
    
    static celsiusParaFahrenheit(celsius) {
      return (celsius * 9) / 5 + 32;
    }
  }
  
  // Exemplo de uso
  const temperaturaCelsius = 25;
  const temperaturaFahrenheit = Utilitario.celsiusParaFahrenheit(temperaturaCelsius);
  console.log(`${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit}°F.`);
  */
/*
 class Jogo {
    
    static jogar(numeroMinimo, numeroMaximo, chuteDoUsuario) {
     
      const numeroAleatorio = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
  
      console.log(`Número gerado: ${numeroAleatorio}`); 
  
      
      if (chuteDoUsuario === numeroAleatorio) {
        return "Parabéns! Você acertou!";
      } else {
        return `Você errou! O número era ${numeroAleatorio}.`;
      }
    }
  }
  
  // Exemplo de uso
  const numeroMinimo = 1;
  const numeroMaximo = 10;
  const chuteDoUsuario = 7; // O usuário chuta o número 7
  
  const resultado = Jogo.jogar(numeroMinimo, numeroMaximo, chuteDoUsuario);
  console.log(resultado);
 */
class ContaBancaria {
    constructor(titular, saldoInicial) {
      this.titular = titular; 
      this.saldo = saldoInicial; 
    }
  
    exibirSaldo() {
      console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`);
    }
  
   
    sacar(valor) {
      if (valor > this.saldo) {
        console.log(`Saque de R$${valor.toFixed(2)} não permitido. Saldo insuficiente.`);
      } else {
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
      }
      this.exibirSaldo();
    }
  }
  

  const conta = new ContaBancaria('João', 500);
  
  conta.exibirSaldo(); 
  conta.sacar(200);    
                        
  conta.sacar(400);    
                        
  