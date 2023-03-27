/* 
1. Calcule a quantidade necessária para manter seu lanche favorito de forma vitálicia. Utilize os seguintes
parâmetros para o cálculo:

 Utilize uma variável para armazenar sua idade atual.
 Utilize uma variável para armazenar sua idade máxima de vida.
 Utilize uma variável para armazenar a quantidade de lanches por dia.
Imprima na tela o resultado calculado: "Você precisará de N lanches para durar até a velhice de X
anos".
*/

let idadeAtual = 17
let idadeMaxima = 350
let qntLancheDia = 2

document.write(`1) Você precisará de ${(idadeMaxima - idadeAtual) * 365 * qntLancheDia} lanches para durar até a velhice de ${idadeMaxima} anos. <br>`)

/*
2. Calcule as propriedades de um círculo, usando as seguintes definições:
 Armazene o raio em uma variável.
 Calcule o comprimento da circunferência com base no raio e imprima na tela "A circunferência tem N".
Calcule a área com base no raio e imprima "A área é X".
 Utilize a função Math.PI para retornar o valor de 3.14.
*/

let raio = 10
document.write(`2) A circunferência tem ${2*raio*Math.PI}. A área é ${(raio**2)*Math.PI} <br>`)
