const alternarBotaoElemento = document.getElementById("alternarBotao");
const mensagemElemento = document.getElementById("mensagem");

//vamos adicionar um evento de clique no botao
alternarBotaoElemento.addEventListener("click",function() {
    if(mensagemElemento.classList.contains("oculto")){
        mensagemElemento.classList.remove("oculto");
    }else{
        mensagemElemento.classList.add("oculto");
    }
});