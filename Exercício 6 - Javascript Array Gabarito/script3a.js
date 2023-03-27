function minhaFuncao(num) {
    let valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    /*A letra M indica mil unidades e pode se repetir até 3 vezes para representar quantidades. */
    /*Para indicar quantidades a partir de 4000, os romanos usavam um traço horizontal sobre as letras correspondentes à quantidade de milhares. */
    /*leia https://www.infoescola.com/matematica/numeros-romanos/ */
    
    let romanoNumero = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let romano = "";
  //pecorre o vetor de algarismos do início ao fim -
  for (i = 0; i < valores.length; i++) {
   
    //procurando em cada índice qual classe o número informado como entrada se classifica na decomposição no sistema de numeração romana
    //exemplo1: 1000 <=15
    //exemplo2: 900 <= 15    
    while (valores[i] <= num) {
     
      //busca o número romano referente ao índice e o + concatena
      //exemplo1: romano recebe X
      //exemplo1: romano recebe XV => 15
      romano += romanoNumero[i];
   
      //Decrementa num = num - valores[i]
      //exemplo1 num = 15 - 10 =>5
      num -= valores[i];
   
    }
  }
  return romano;
}

console.log(minhaFuncao(15));
//console.log(minhaFuncao(40));
//console.log(minhaFuncao(1046));
//console.log(minhaFuncao(3999));



