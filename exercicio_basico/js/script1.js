function minhaFuncao() {
        /*idade*/
        var idade = document.getElementById("txtidade").value;
        /*idade máxima*/
        var idademax = document.getElementById("txtidademax").value;
        /*qunatidade de lanches por dia*/
        var qtdlanches = document.getElementById("txtlanches").value;
        var totallanches = (qtdlanches * 365) * (idademax - idade);
        var messagem = `Você precisará de ${ totallanches } copos de café para durar até a velhice de ${ idademax } anos. `;
        alert(messagem);
}