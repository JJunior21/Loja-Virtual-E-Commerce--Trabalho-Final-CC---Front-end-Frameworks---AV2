# Loja AV2 - E-commerce React + TypeScript

Projeto desenvolvido para a disciplina de **Front-end Frameworks** (AV2).
A aplicação simula um e-commerce completo com carrinho de compras, painel administrativo (Dashboard) e integração com API REST simulada.

Aluno:Juracy De Freitas Costa Junior
Curso: Ciência da Computação

---

## 🚀 Tecnologias Utilizadas

* React.js
* TypeScript
* Vite
* React Router Dom (Navegação)
* Context API (Gerenciamento de Estado Global)
* JSON Server (Simulação de API REST)
* CSS Modules (Estilização)

---

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter o **Node.js** instalado em sua máquina.

---

## 📦 Como Rodar o Projeto

Este projeto utiliza uma API simulada (`json-server`). Portanto, é necessário rodar dois terminais simultaneamente.

### Passo 1: Instalar Dependências
Abra o terminal na pasta do projeto e execute:
npm install

Passo 2: Iniciar a API
Abra o primeiro terminal e execute:
npm run api
Isso iniciará o servidor na porta 3000 (http://localhost:3000).

Passo 3: Iniciar o Front-end
Abra um segundo terminal e execute:
npm run dev
Acesse o projeto em seu navegador (geralmente http://localhost:5173).

Funcionalidades Implementadas
Vitrine de Produtos: Carregamento dinâmico de produtos via API (fetch).
Carrinho de Compras: Adição e remoção de itens, cálculo de total (usando Context API).
Dashboard Híbrido: Painel com visão de Cliente (pedidos) e Vendedor (gestão e exclusão).
Autenticação: Simulação de Login com redirecionamento.
Páginas Institucionais: Sobre e Contatos com formulários e layouts responsivos.
