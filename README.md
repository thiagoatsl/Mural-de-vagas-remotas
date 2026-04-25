# 🚀 Mural de Vagas Remotas

Um Mural de Vagas Remotas (Single Page Application) desenvolvido em React para o Projeto 1 da disciplina de Programação Web Fullstack. O projeto consome dados reais de vagas da **Remotive API** e permite busca por termo (tecnologia, cargo, empresa).

🔗 **Acesse o projeto online:** [https://mural-de-vagas-remotas-rose.vercel.app] 

## 🛠 Tecnologias e Requisitos Atendidos

Este projeto foi desenvolvido cumprindo todas as diretrizes propostas na avaliação:

*   **SPA (Single Page Application):** Criado utilizando **React.js** com a ferramenta Vite.
*   **Consumo de API JSON Aberta:** Integração com a [Remotive API](https://remotive.com/api/remote-jobs), enviando parâmetros de busca diretamente via Axios.
*   **Hook/Funcionalidade Escolhida:** Foi selecionado o **`react-redux`** (Redux Toolkit) para o gerenciamento de estado global da aplicação (armazenando a lista de vagas e os status de carregamento).
*   **Biblioteca Externa Escolhida:** Interface estilizada utilizando **`styled-components`** e requisições HTTP gerenciadas com **`axios`**.
*   **Estrutura do Projeto:** Códigos-fontes rigorosamente separados nas pastas `src/components` e `src/contexts`.
*   **Validações:** O formulário obriga o preenchimento antes do envio para a API e apresenta as mensagens de erro na tela de forma clara (antes e depois do envio).

## 💻 Como rodar o projeto localmente

Para rodar este projeto na sua máquina, você precisará do [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório ou baixe o arquivo `.zip`:
```bash
git clone https://github.com/thiagoatsl/Mural-de-vagas-remotas
```

2. Acesse a pasta do projeto:
```bash
cd Mural-de-vagas-remotas-main
```

3. Instale as dependências do projeto:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. O projeto abrirá no seu navegador no endereço: `http://localhost:5173`

---
*Desenvolvido por Augusto Thiago e Gabriel Sarti.*
