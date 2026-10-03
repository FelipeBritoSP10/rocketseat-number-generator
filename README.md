<h1 align="center">✨ Numbers</h1>

<p align="center">
  <b>Sorteador de números aleatórios moderno, minimalista e responsivo.</b><br>
  Rápido, transparente e sem complicação.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-concluído-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/bootstrap-5.3.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/javascript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#️-tecnologias-utilizadas)
- [Como executar](#-como-executar)
- [Como usar](#-como-usar)
- [Regras de validação](#-regras-de-validação)
- [Arquitetura](#-arquitetura)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Roadmap](#-roadmap)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 🚀 Sobre o projeto

O **Numbers** é uma ferramenta online e gratuita para realizar sorteios de forma rápida, transparente e elegante. Serve para sortear participantes de uma rifa, definir a ordem de apresentações, escolher números de loteria ou qualquer situação em que você precise de aleatoriedade confiável.

O projeto foi estruturado com foco em **Clean Code** e **Arquitetura Modular**, separando as responsabilidades entre estilização, lógica de negócio e manipulação do DOM.

---

## ✨ Funcionalidades

- 🎯 **Sorteio personalizável:** defina a quantidade de números e os valores inicial (*De*) e final (*Até*).
- 🔁 **Modo sem repetição:** garante que nenhum número seja sorteado mais de uma vez no mesmo ciclo.
- ✅ **Validação inteligente:** tratamento robusto de erros, com feedback visual em tempo real.
- 🎬 **Animações fluidas:** transições suaves e efeitos modernos.
- 🌙 **Dark mode:** interface pensada para o tema escuro.
- 📱 **Totalmente responsivo:** funciona bem em celulares, tablets e desktops.
- ⚡ **Zero dependências de build:** roda direto no navegador, sem instalar nada.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
| --- | --- |
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização, variáveis e animações |
| **Bootstrap 5.3.3** | Grid, componentes e responsividade |
| **Google Fonts (Roboto)** | Tipografia |
| **JavaScript (ES6+ Modules)** | Lógica de sorteio e interação com o DOM |

---

## 📦 Como executar

Como o projeto usa **ES Modules**, é necessário servir os arquivos por um servidor HTTP local (abrir o `index.html` direto pelo `file://` pode bloquear os módulos).

```bash
# 1. Clone o repositório
git clone https://github.com/FelipeBritoSP10/rocketseat-number-generator

# 2. Acesse a pasta do projeto
cd rocketseat-number-generator

# 3. Inicie um servidor local (escolha uma opção)
npx serve .
# ou
python -m http.server 5500
```

Depois, abra `http://localhost:5500` (ou a porta indicada) no navegador.

> 💡 Se você usa o VS Code, a extensão **Live Server** resolve com um clique.

---

## 🎮 Como usar

1. Informe **quantos números** deseja sortear.
2. Defina o intervalo: valor **inicial (De)** e valor **final (Até)**.
3. *(Opcional)* Marque **"Não repetir números"**.
4. Clique em **Sortear** e veja o resultado com animação.
5. Quer outro sorteio? Basta sortear novamente.

---

## 🛡️ Regras de validação

| Situação | Comportamento |
| --- | --- |
| Campo vazio ou não numérico | Exibe mensagem de erro e destaca o campo |
| Valor inicial maior que o final | Bloqueia o sorteio e orienta a correção |
| Quantidade menor que 1 | Bloqueia o sorteio |
| Sem repetição e quantidade maior que o intervalo | Bloqueia o sorteio (ex.: 10 números em um intervalo de 1 a 5) |

---

## 🧱 Arquitetura

O código segue o princípio de **responsabilidade única**, dividido em camadas:

- **Estilos (`css/`)**: aparência e animações, isoladas da lógica.
- **Lógica de negócio (`js/`)**: funções puras de sorteio e validação, sem dependência do DOM, o que facilita testes.
- **Interface (`js/`)**: manipulação do DOM, eventos e exibição de resultados e erros.

```
Usuário → Interface (DOM) → Validação → Sorteio → Interface (resultado)
```

---

## 📁 Estrutura de pastas

> Ajuste conforme a estrutura real do seu projeto.

```
rocketseat-number-generator/
├── index.html
├── css/
│   └── main.css
├── js/
│   ├── app.js      
│   ├── sorteador.js 
├── LICENSE
└── README.md
```

---

## 🗺️ Roadmap

- [x] Sorteio com intervalo personalizado
- [x] Modo sem repetição
- [x] Validação com feedback visual
- [x] Layout responsivo e dark mode
- [ ] Histórico de sorteios
- [ ] Botão de copiar resultado
- [ ] Sorteio de nomes a partir de uma lista
- [ ] Alternância entre tema claro e escuro
- [ ] Testes automatizados

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas!

1. Faça um **fork** do projeto
2. Crie uma branch: `git checkout -b feature/minha-feature`
3. Faça o commit: `git commit -m "feat: adiciona minha feature"`
4. Envie para o seu fork: `git push origin feature/minha-feature`
5. Abra um **Pull Request**

---

## 📄 Licença

Distribuído sob a licença **MIT**. Consulte o arquivo [`LICENSE`](./LICENSE) para mais informações.

---

## 👨‍💻 Autor

Feito com 💜 por **Felipe Brito**

[![GitHub](https://img.shields.io/badge/GitHub-seu--usuario-181717?style=flat&logo=github)](https://github.com/FelipeBritoSP10)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-seu--perfil-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/felipe-brito-09a355285/)

<p align="center">⭐ Se este projeto foi útil, deixe uma estrela no repositório!</p>