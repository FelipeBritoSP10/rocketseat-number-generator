import { carregarTodosComponentes } from './components.js';
import { sortearNumeros } from './sorteador.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Carrega todos os componentes HTML dinamicamente
    await carregarTodosComponentes();

    // 2. Vincula os elementos e eventos após a injeção
    const btnSortear = document.getElementById('btn-sortear');
    const btnVoltar = document.getElementById('btn-voltar');
    const formView = document.getElementById('form-view');
    const resultadoView = document.getElementById('resultado-view');
    const mensagemErro = document.getElementById('mensagem-erro');
    const numerosContainer = document.getElementById('numeros-container');
    const inputQuantidade = document.getElementById('quantidade');

    if (inputQuantidade) inputQuantidade.focus();

    // Delegação de eventos ou escuta direta após renderização
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'btn-sortear') {
            executarSorteio();
        }
        if (e.target && e.target.id === 'btn-voltar') {
            voltarFormulario();
        }
    });

    function executarSorteio() {
        const inputQtd = document.getElementById('quantidade');
        const inputMin = document.getElementById('minimo');
        const inputMax = document.getElementById('maximo');
        const checkRepetir = document.getElementById('naoRepetir');
        const msgErro = document.getElementById('mensagem-erro');

        msgErro.classList.add('d-none');
        msgErro.textContent = '';

        const qtd = parseInt(inputQtd.value);
        const min = parseInt(inputMin.value);
        const max = parseInt(inputMax.value);
        const naoRepetir = checkRepetir.checked;

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
    }

    function voltarFormulario() {
        const resView = document.getElementById('resultado-view');
        const fView = document.getElementById('form-view');
        const inputQtd = document.getElementById('quantidade');

        resView.classList.add('d-none');
        fView.classList.remove('d-none');
        if (inputQtd) inputQtd.focus();
    }

    function mostrarErro(mensagem) {
        const msgErro = document.getElementById('mensagem-erro');
        msgErro.textContent = mensagem;
        msgErro.classList.remove('d-none');
    }

    function exibirResultados(numeros) {
        const fView = document.getElementById('form-view');
        const resView = document.getElementById('resultado-view');
        const container = document.getElementById('numeros-container');

        fView.classList.add('d-none');
        resView.classList.remove('d-none');
        container.innerHTML = '';

        numeros.forEach((num, index) => {
            const bola = document.createElement('div');
            bola.className = 'numero-sorteado';
            bola.style.animationDelay = `${index * 0.1}s`;
            bola.textContent = num;
            container.appendChild(bola);
        });
    }
});