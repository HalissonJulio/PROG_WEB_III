function minhaFuncao() {
    const entrada = [1, 2, 3, 4, 5];

    /* cada item do array é armazenada na variavel num, que é passada como entrada */    
    novoArray = entrada.map((num) => Math.pow(num, 2));
    // novoArray = entrada.map(function (num) { return Math.pow(num, 2);  });
    console.log(novoArray);
   
}
