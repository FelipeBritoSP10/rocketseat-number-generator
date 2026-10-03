import { sortearNumeros } from './sorteador.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnSortear = document.getElementById('btn-sortear');
    const btnVoltar = document.getElementById('btn-voltar');
    const formView = document.getElementById('form-view');
    const resultadoView = document.getElementById('resultado-view');
    const mensagemErro = document.getElementById('mensagem-erro');
    const numerosContainer = document.getElementById('numeros-container');
    const inputQuantidade = document.getElementById('quantidade');

    inputQuantidade.focus();

    btnSortear.addEventListener('click', () => {
        mensagemErro.classList.add('d-none');
        mensagemErro.textContent = '';

        const qtd = parseInt(inputQuantidade.value);
        const min = parseInt(document.getElementById('minimo').value);
        const max = parseInt(document.getElementById('maximo').value);
        const naoRepetir = document.getElementById('naoRepetir').checked;

        if (isNaN(qtd) || isNaN(min) || isNaN(max)) {
            mostrarErro('Por favor, preencha todos os campos com números válidos.');
            return;
        }

        try {
            const resultados = sortearNumeros(qtd, min, max, naoRepetir);
            exibirResultados(resultados);
        } catch (erro) {
            mostrarErro(erro.message);
        }
    });

    btnVoltar.addEventListener('click', () => {
        resultadoView.classList.add('d-none');
        formView.classList.remove('d-none');
        inputQuantidade.focus();
    });

    function mostrarErro(mensagem) {
        mensagemErro.textContent = mensagem;
        mensagemErro.classList.remove('d-none');
    }

    function exibirResultados(numeros) {
        formView.classList.add('d-none');
        resultadoView.classList.remove('d-none');
        numerosContainer.innerHTML = '';

        numeros.forEach((num, index) => {
            const bola = document.createElement('div');
            bola.className = 'numero-sorteado';
            bola.style.animationDelay = `${index * 0.1}s`;
            bola.textContent = num;
            numerosContainer.appendChild(bola);
        });
    }
});