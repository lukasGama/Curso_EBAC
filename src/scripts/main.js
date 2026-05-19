document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault(); // prevenir o recarregamento rapido da pagina, comportamento padrao
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo); //(parseInt para ir de string para inteiro)

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1); // (ceil= pra cima, floor= pra baixo, round=para arredondar pra cima ou baixo )

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block'; //ocultar a caixa de numero sorteado
    })
})