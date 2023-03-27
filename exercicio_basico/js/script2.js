function minhaFuncao() {
    /*raio*/
    var raio = document.getElementById("txtraio").value;
    
    var circuferencia = Math.PI * 2*raio;
    console.log("O comprimento da circunferência: " + circuferencia);


    var area = Math.PI * raio*raio;
    console.log("A área tem:  " + area);


}