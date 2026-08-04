const btnIncrementarEl = document.getElementById("btnIncrementar");
const btnResetarEl = document.getElementById("btnResetContador");
const numeroContador = document.getElementById("numClick")

let contador = 0;

btnIncrementarEl.addEventListener('click', function(){
    contador = contador +1
    numeroContador.textContent = contador
})

btnResetarEl.addEventListener('click', function(){
    numeroContador.textContent = contador = 0
})