async function carregarComponente(id, caminho) {
    try {
        const resposta = await fetch(caminho);
        if (!resposta.ok) throw new Error(`Erro ao carregar ${caminho}`);
        const html = await resposta.text();
        document.getElementById(id).innerHTML = html;
    } catch (erro) {
        console.error(erro);
    }
}

export async function carregarTodosComponentes() {
    await Promise.all([
        carregarComponente('navbar-container', './src/components/navbar.html'),
        carregarComponente('app-container', './src/components/home.html'),
        carregarComponente('footer-container', './src/components/footer.html')
    ]);
    await carregarComponente('sorteador-container', './src/components/sorteador-card.html');
}