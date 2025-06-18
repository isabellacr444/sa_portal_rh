# Projeto SA Portal RH

**Última atualização:** 18/06/2025 às 14:00.

## Descrição
Este projeto é um portal de RH desenvolvido em Angular, com funcionalidades para gerenciamento de currículos e vagas de emprego. O sistema utiliza um backend simulado via `json-server` e possui componentes dedicados para listagem, cadastro, edição e exclusão de dados relacionados a currículos e vagas.

## Funcionalidades principais
- Listagem de currículos e vagas.
- Formulários para cadastro, atualização e exclusão de vagas.
- Visualização detalhada e edição de currículos.
- Consumo de dados via serviços Angular (`CurriculosService`, `VagasService`).
- Estrutura modular com componentes reutilizáveis.
- Estilização personalizada utilizando SCSS.
- Testes unitários básicos para garantir qualidade do código.

## Tecnologias utilizadas
- Angular
- TypeScript
- SCSS
- json-server (simulação de backend)
- Jasmine/Karma (testes unitários)

## Estrutura do projeto
- `AppModule`: módulo principal, registra todos os componentes essenciais.
- `AppRoutingModule`: gerenciamento de rotas.
- Componentes:
  - `HeaderComponent`
  - `FooterComponent`
  - `HomeComponent`
  - `VagasComponent`
  - `PainelVagasComponent`
  - `CurriculosComponent`
  - `CurriculoFormComponent`
  - `CurriculoListComponent`
  - `CurriculoDetailComponent`

## Modelos
- `Vaga`: com atributos privados, getters, setters, métodos de conversão `toMap` e `fromMap`.
- `Curriculo`: modelo semelhante ao de vagas, com manipulação de dados via métodos encapsulados.
