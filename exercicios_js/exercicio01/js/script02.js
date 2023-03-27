/*2. Crie um array com as entradas [1,2,3,4,5] e imprima na tela o quadrado dessas entradas. Utilize a
função map do javascript para construir o código.*/

const arrayNum = new Array(1, 2, 3, 4, 5);

var quadrado = arrayNum.map(function(numeros){
    return(numeros ** 2)
});

document.write(`Números iniciais:   ${arrayNum} <br>`);
document.write(`Números iniciais ao quadrado:    ${quadrado}`);