<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<div align="center">
  <a>
    <img alt="Nuxt 3" src="https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC822"/>
  <a/>
    <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</div>

<div align="center">

# `NLW Spacetime - 12° edição (Nuxt)`
</div>

## Sobre o Projeto

Aplicação de recordação de memórias, onde o usuário poderá adicionar à uma timeline textos, fotos e vídeos de acontecimentos marcantes da sua vida, organizados por mês e ano.
Aplicação construída utilizando o framework Nuxt.

> `<nlw/> Spacetime` é um projeto desenvolvido durante o **Next Level Week**, evento online produzido pela [**Rocketseat**](https://www.rocketseat.com.br/).


## Tecnologias

<table>
  <tbody>
    <tr>
    <tr>
      <td style="font-weight: bold">front-end<code>(/web)</code></td>
      <td>
        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"><code>Vuejs</code></a> -
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><code>TypeScript</code></a> -
        <a href="https://nuxt.com/" target="_blank" rel="noopener noreferrer"><code>Nuxtjs</code></a> -
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><code>TailwindCSS</code></a> -
        <a href="https://axios-http.com/ptbr/" target="_blank" rel="noopener noreferrer"><code>Axios</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Configurações

### Requisitos

Necessário realizar as instalações:

- [`Git`](https://git-scm.com/)
- [`npm`](https://www.npmjs.com/)
- [`Node`](https://nodejs.org/)

Criar conta e configurar os serviços externos:

- [`GitHub`](https://github.com/)

### Clonar repositório

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/cn-2k/nlw-spacetime-nuxt.git
# Entre na pasta do repositório clonado
$ cd nlw-spacetime-nuxt
```

### Comandos importantes

#### `/server`

```bash
# instalar dependências
$ npm i
# iniciar servidor
$ npm run dev
# setup prisma com flag SQLite - schema prisma file / .env
$ npx prisma init --datasource-provider SQLite
# migration - mecanismo de versionamento de banco de dados (arquivos de instruções)
$ npx prisma migrate dev
# reset(caso necessário) - excluir registros do banco de dados
$ npx prisma migrate reset
# visualisar banco de dados - Prisma Studio
$ npx prisma studio
# Gerar ERD - Diagrama de Banco de Dados
$ npx prisma generate
# Gerar seed (exemplo) para Banco de Dados. Observar configurações do prisma no package.json
$ npx prisma db seed
```

#### `/web`

```bash
# instalar dependências
$ yarn install
# iniciar servidor
$ yarn dev
```

### Variáveis ambiente (.env)

Em ambos os projetos altere o nome da variável .env.example para .env e insira as informações necessárias em cada variável.
