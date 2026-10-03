export function sortearNumeros(quantidade, minimo, maximo, naoRepetir) {
    if (maximo <= minimo) {
        throw new Error('O valor máximo deve ser estritamente maior que o valor mínimo.');
    }

    const amplitude = (maximo - minimo) + 1;
    if (naoRepetir && quantidade > amplitude) {
        throw new Error(`A quantidade de números (${quantidade}) não pode ser maior que o intervalo disponível (${amplitude}).`);
    }

    if (quantidade <= 0) {
        throw new Error('A quantidade de números deve ser maior que zero.');
    }

    const sorteados = [];
    
    if (naoRepetir) {
        const numerosDisponiveis = Array.from({ length: amplitude }, (_, i) => minimo + i);
        for (let i = 0; i < quantidade; i++) {
            const indiceAleatorio = Math.floor(Math.random() * numerosDisponiveis.length);
            sorteados.push(numerosDisponiveis.splice(indiceAleatorio, 1)[0]);
        }
    } else {
        for (let i = 0; i < quantidade; i++) {
            const numeroAleatorio = Math.floor(Math.random() * amplitude) + minimo;
            sorteados.push(numeroAleatorio);
        }
    }

    return sorteados;
}