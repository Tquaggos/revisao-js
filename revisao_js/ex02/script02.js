const listaElemento = document.getElementById("lista");
const novoItemElemento = document.getElementById("Novo Item");
const botaoAdicionarElemento = document.getElementById("botaoAdicionar");

botaoAdicionarElemento.addEventListener("click", function(){
    //ler o valor do imput
    const novoItemTexto = novoItemElemento.value;
    //validar o novo item
    if(novoItemTexto !== ""){
        //criar um novo elemento
        const novoItemElemento = document.createElement("li");
        //definir o texto do novo elemento li
        novoItemElemento.textContent = novoItemTexto
        //adicionar o novo elemento li a lista (ul)
        listaElemento.appendChild(novoItemElemento);
        //após a entrada vamos limpar o input 
        novoItemElemento.value = "";
    }
})