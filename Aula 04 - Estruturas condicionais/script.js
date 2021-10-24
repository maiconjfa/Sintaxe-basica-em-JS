/*var jogador1 = 0;
var jogador2 = 3;
var placar;

if(jogador1 > 0){
  console.log('Jogador 1 fez gol!')
}else if(jogador2 > 0){
  console.log('Jogador 2 fez gol!')
}else{
  console.log('Jogo ficou empatado.')
}*/


/*switch (placar){
  case placar = jogador1 > jogador2:
    console.log('Jogador 1 ganhou!');
    break;
    case placar = jogador2 > jogador1:
      console.log("Jogador 2 ganhou!");
      break;
      default:
      console.log("Partida empatada");
}*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

//for - Executa uma instrução ate que ela seja falsa
for(let indice = 0; indice < array.length; indice++){
  //console.log(indice)
}

/*
//for/ in - Executa repetição a partir de uma propriedade

for(let i in array){
  console.log(i)
}
//com o 'object'
for(i in object){
  console.log(i)
}

*/

/*
//for/ of - Executa repetição a partir de um valor

for(i of array){
  console.log(i);
}
//com o 'object' não é possivel utilizar for/ of

*/

/*
//While - Executa uma instrução enquanto determinada função for verdadeira
//A Verificação é feita antes da execução (loop).

var a = 0;
while(a < 10){
  a++;
  console.log(a)
}
*/


//Do/ While - Executa uma instrução até que determinada condição seja falsa.
//A Verificação é feita depois da execução (loop).

var a = 0
do {
  a++
  console.log(a)
} while(a < 10)