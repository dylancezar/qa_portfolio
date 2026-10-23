# ☕ CoffeeCart — Test Automation com Playwright

## 📌 Sobre o projeto

Projeto prático de **automação de testes de interface (UI Testing)** desenvolvido com **Playwright e JavaScript**, utilizando o padrão **Page Object Model (POM)**.

O objetivo é validar as principais funcionalidades da aplicação CoffeeCart, verificando o comportamento do carrinho de compras, os preços dos produtos e as interações do usuário.

## 🛠️ Tecnologias utilizadas

- **Playwright** — automação de testes de interface.
- **JavaScript** — desenvolvimento dos testes automatizados.
- **Page Object Model (POM)** — organização e reutilização do código.
- **Node.js / npm** — gerenciamento do ambiente e das dependências.

## 🧪 Cenários automatizados

O projeto contém testes para:

- Adicionar Espresso e Cappuccino ao carrinho.
- Remover produtos do carrinho.
- Validar preços individuais dos produtos.
- Verificar o valor total dos pedidos.
- Aumentar e diminuir quantidades no carrinho.
- Validar a mensagem exibida quando o carrinho está vazio.
- Verificar o comportamento do carrinho após atualizar a página.
- Testar a aceitação e a recusa de ofertas promocionais.

## 📂 Estrutura do projeto

```text
playwright_coffecart_pom/
├── src/
│   └── pages/
│       ├── CartPage.js
│       └── MenuPage.js
├── tests/
│   ├── addToCart/
│   ├── emptyCart/
│   ├── menuTests/
│   ├── promoTests/
│   ├── refreshCart/
│   ├── removeFromCart/
│   └── updateCart/
├── playwright.config.js
├── package.json
└── README.md
```

## 🚀 Como executar os testes

**1. Clone o repositório:**

```bash
git clone https://github.com/dylancezar/qa_portfolio.git
```

**2. Entre na pasta do projeto:**

```bash
cd qa_portfolio/playwright_coffecart_pom
```

**3. Instale as dependências:**

```bash
npm install
```

**4. Instale os navegadores do Playwright:**

```bash
npx playwright install
```

**5. Execute os testes:**

```bash
npx playwright test
```

Para executar com a interface visual do Playwright:

```bash
npx playwright test --ui
```

Para visualizar o relatório HTML, caso esteja configurado:

```bash
npx playwright show-report
```

## 🎯 Objetivo do projeto

Demonstrar conhecimentos práticos em **Test Automation**, criação de cenários de teste, utilização de **Locators e Assertions**, organização com **Page Object Model (POM)** e manutenção de testes automatizados.

O projeto faz parte do meu portfólio de Quality Assurance, com foco no desenvolvimento de habilidades para atuar como **QA Engineer**.
