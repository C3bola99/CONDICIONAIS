//let i = 0
//while (i<10) {
//console.log(i)
//i++
//}
//

/*let num = null
let soma = 0

while (num !== 0) {
soma = soma + num*/
//num = Number(prompt("digite um numero:"))
//}
//console.log(soma)



//


//for(let i=0; i<10;        i++){
//console.log(i)

//}
/*
let array = [15,24,64,10,7]
function maiorNumero(vetor){
    let maior;
    for (let i=0;i<vetor.lenght; i++){

        if(i===0){
            maior =vetor[i]
        }
        if(maior<vetor[i]){
            maior=vetor[i]
        }
        }
        return maior
    }
    maior = maiorNumero(array)
    console.log(maior)

    */
   
/*
    const arrayDePalavras = ["oi", "sumido", "tudo", "bem?"];

    function imprimirPalavras(array) {
      console.log(array.join(" "));
    }
    
    imprimirPalavras(arrayDePalavras);
  */




//Exercícios de interpretação e prática
//A)
/*
    let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//será somados os valores individuais de 0 a 4, portanto... 0+1+2+3+4= 10
//resposta final: o valor retornado será 10

//B)

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//Será retornado todos os valores maiores que 18, portanto retornará (19,21,23,25,27,30)
//Não seria possivel acessar o índice, for...of é projetado para acessar os elementos.
*/
//Exercícios práticos
//A)

const quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"));
const nomesBichinhos = [];

if (quantidadeBichinhos > 0) {
  for (let i = 1; i <= quantidadeBichinhos; i++) {
    nomesBichinhos.push(prompt(`Digite o nome do bichinho de estimação ${i}:`));
  }

  console.log("Nomes dos bichinhos de estimação:", nomesBichinhos);
} else {
  console.log("Que pena! Você pode adotar um pet!");
}


//B)