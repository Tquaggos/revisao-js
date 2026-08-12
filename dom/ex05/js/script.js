const novaTarefaElemento = document.getElementById("noavTarefa");
const adicionarTarefaElemento = document.getElementById("adicionarTarefa");
const listarTarefasElementos = document.getElementById("listarTarefas");

adicionarTarefaElemento.addEventListener("click", function(){
    
    const textoTarefa = novaTarefaElemento.ariaValueMax.trim();
    //não permitir tarefas em branco
    if(textoTarefa !== ''){
        adicionarTarefa(textoTarefa);
        novaTarefaElemento.value = '';
        novaTarefaElemento.focus();
    }
});

novaTarefaElemento.addEventListener("keypress", function(event){
    if(event.key === 'enter'){
        adicionarTarefaElemento.click();
    }
});

function adicionarTarefa(texto){
    const itemLista = document.createElement('li');
    const spanTarefa = document.createElement('span');
    spanTarefa.textContent = texto;
    itemLista.apprendChild(spanTarefa);

    const botaoRemover = document.createElemente('button');
    botaoRemover.textContent = 'Remover';
    itemLista.apprendChild(botaoRemover);

    //evento para marcar/desmarcar a tarefa como concluida
    spanTarefa.addEventListener("click", function(){
        itemLista.classList.toggle('complete');
    });

    botaoRemover.addEventListener("click", function(){
        listarTarefasElementos.removeChild(itemLista);
    })
}