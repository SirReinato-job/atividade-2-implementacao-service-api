# LH Games - Documentação do Projeto

Este projeto é uma versão atualizada da **LH Games**, reconstruída com **Angular CLI**, **Angular Material** e **Bootstrap**. O objetivo é oferecer uma aplicação moderna, responsiva e escalável para uma loja de jogos online.

 ## Atualização: Integração com JSON-Server
Nesta etapa do projeto, foi implementada a integração entre o frontend Angular e uma **API REST** fake via **JSON-server**, permitindo listagem e cadastro de produtos de forma dinâmica.

### 🧩 Funcionalidades da Atividade

- **Painel Principal**
  - Exibe a **lista de produtos** consumindo dados de uma API local via JSON-server.
  - Permite excluir ou navegar até a tela de edição de um produto.
  
- **Cadastro de Produtos**
  - Componente reutilizável para **cadastro e edição**.
  - Integração completa com a API para **adicionar** ou **atualizar** um produto existente.
  - Utiliza `ngModel` com `FormsModule` para o two-way data binding.
  - As rotas `cadastro-produto` e `cadastro-produto/:id` são utilizadas dinamicamente para determinar a ação.

- **Produto Service**
  - Abstração das operações de GET, POST, PUT e DELETE com a API.
  - Organizado em `servicos/produto.service.ts`.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **Angular CLI** – Framework para construção de aplicações SPA.
- **Angular Material** – Biblioteca de componentes UI com Material Design.
- **Bootstrap** – Framework CSS utilizado para responsividade e carrossel.
- **TypeScript** – Linguagem base do Angular.
- **SCSS** – Utilizado para a estilização modularizada.

## 📁 Estrutura do Projeto

```plaintext
public/
  └── node_modules/

src/
  └── app/
      ├── components/
      │   ├── carrossel/
      │   ├── footer/
      │   ├── cadastro-produto/
      │   ├── painel-principal/
      │   └── menu/
      ├── app.component.html
      ├── app.component.scss
      ├── app.component.spec.ts
      ├── app.component.ts
      ├── app.config.ts
      ├── app.routes.ts
      ├── app.routes.server.ts
  └── assets/
  └── environments/
  └── index.html
  └── main.server.ts
  └── main.ts
  └── server.ts
  └── styles.scss

.gitignore
.angular.json
package-lock.json
package.json
README.md
.tsconfig.app.json
.tsconfig.json
.tsconfig.spec.json
```

## ⚙️ Principais Funcionalidades

A navegação é controlada por rotas declaradas no app.routes.ts, utilizando os componentes RouterOutlet, RouterLink e RouterLinkActive.
Para editar um produto diretamente da listagem, também é possível utilizar a diretiva [routerLink].

## 🎨 Interface com Angular Material

- MatToolbarModule para a barra de navegação superior

- MatIconModule para ícones modernos

- MatButtonModule para botões com design responsivo

- Estilo adaptado com SCSS modularizado por componente

## 🎠 Carrossel com Bootstrap

O carrossel de banners promocionais é implementado com o componente Carousel do Bootstrap, garantindo um layout responsivo e amigável em diferentes dispositivos.

## ✅ Funcionalidades Implementadas

- Página inicial com banners, jogos em destaque e cards responsivos.

- Sistema de navegação SPA com rotas protegidas.

- Página de login com validação.

- Cadastro de usuários com feedback visual.

- Estrutura modular para fácil manutenção e escalabilidade.

- Utilização de serviços para abstração de funcionalidades futuras (ex: carrinho, autenticação).

## Dependências

- @angular/material

- @angular/router

- bootstrap

- rxjs

- zone.js

## 📌 Considerações Finais

Este projeto marca uma transição da versão estática em HTML/CSS/JS para uma aplicação SPA com Angular, oferecendo uma base sólida para futuras funcionalidades como back-end integrado, banco de dados, e-commerce real e painéis administrativos.
Sinta-se à vontade para explorar, contribuir e sugerir melhorias.
