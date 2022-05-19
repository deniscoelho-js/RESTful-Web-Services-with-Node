# PROJETO – NODEESTAGIODIEGODENIS

## 🚀 O desafio

O desafio técnico consiste em desenvolver uma API para fazer um crud (criar, ler, atualizar, deletar) de Tarefas.

## :crystal_ball: Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

-   [NodeJs]
-   [TypeScript]
-   [Postgress]
-   [Docker]

## :arrow_forward: Instalação e uso

Clone o repositório

```bash
git clone https://deniscoelho-js@bitbucket.org/deniscoelho1/nodeestagiodiegodenis.git

```

Siga os passos abaixo

```bash
# Instale as dependências
$ npm i or yarn

# Inicie o servidor
$ npm run dev or yarn dev
```

## ✨ Desenvolvimento

O projeto foi desenvolvido utilizando _Docker_ e _Postgres_ para a parte de banco de dados e _typeORM_ como ferramenta de ORM.

Foram criados 2 entidades para todo o projeto, um usuário com o campo nome e a tarefa com os campos: nome da tarefa, conteúdo e data de criação.

### ORM TypeORM

> Neste projeto foi utilizado a ferramenta TypeORM.
>
> O TypeORM é um ORM que pode ser utilizado em plataformas como o Node, Ionic, dentre outras, e que possibilita o desenvolvimento tanto com JavaScript como com TypeScript. O TypeORM foi inspirado no Hibernate e Entity Framework, oferece suporte a Decorators e trabalha com bancos de dados como PostgreSQL, Microsoft SQL Server, e atualmente com MongoDB de forma experimental.
