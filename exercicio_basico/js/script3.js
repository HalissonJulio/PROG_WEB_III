function minhaFuncao() {
    /*idioma*/
    var txtidioma = document.getElementById("txtidioma").value;
 
    if (txtidioma == 'fr') {
        traduzido= 'Bonjour tout le monde';    /* Francês */
    } else if (txtidioma == 'es') {    /* Espanhol */
        traduzido= 'Hola, Mundo';
    } else {
        traduzido= 'Hello, World';   /* Inglês */
    }
    console.log(traduzido);

}


