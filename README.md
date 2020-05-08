<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./src/assets/logo.svg" alt="GoFinances"></a>
</p>

<h3 align="center">Backend GoFinances</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/larabeatrizms/backend-gofinances">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/larabeatrizms/backend-gofinances">

  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/larabeatrizms/backend-gofinances">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/larabeatrizms/backend-gofinances">

<!-- [![GitHub Issues](https://img.shields.io/github/issues/larabeatrizms/desafio-fundamentos-nodejs.svg)](https://github.com/larabeatrizms/desafio-fundamentos-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/larabeatrizms/desafio-fundamentos-nodejs.svg)](https://github.com/larabeatrizms/desafio-fundamentos-nodejs/pulls) -->
<!-- [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE) -->

</div>

---

<p align="center"> Banco de dados e upload de arquivos no Node.js.
    <br>
</p>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Iniciando](#getting_started)
- [Preview](#preview)
- [Testes](#tests)
- [Uso](#usage)
- [Construído utilizando](#built_using)
- [Authors](#authors)

## 🧐 Sobre <a name = "about"></a>

Projeto contruído para praticar conhecimentos em Node.js e Banco de dados relacional(Postgres). Essa é uma aplicação que deve armazenar transações financeiras de entrada e saída e permitir o cadastro e a listagem dessas transações, além de permitir a criação de novos registros no banco de dados a partir do envio de um arquivo csv.

### 🚀 Sobre o desafio

Nesse desafio, você deve desenvolver a aplicação de gestão de transações, treinando o que você aprendeu até agora no Node.js junto ao TypeScript, mas dessa vez incluindo o uso de banco de dados com o TypeORM e envio de arquivos com o Multer!

Descrição completa sobre o desafio, [acessar descrição](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-database-upload)

## 🏁 Iniciando <a name = "getting_started"></a>

### Rotas da Aplicação

- **`POST /transactions`**: A rota deve receber `title`, `value`, `type`, e `category` dentro do corpo da requisição, sendo o `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro do seu banco de dados, possuindo os campos `id`, `title`, `value`, `type`, `category_id`, `created_at`, `updated_at`.

- **`GET /transactions`**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor da soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto o seguinte formato:

- **`DELETE /transactions/:id`**: A rota deve deletar uma transação com o `id` presente nos parâmetros da rota;

* **`POST /transactions/import`**: A rota deve permitir a importação de um arquivo com formato `.csv` contendo as mesmas informações necessárias para criação de uma transação `id`, `title`, `value`, `type`, `category_id`, `created_at`, `updated_at`, onde cada linha do arquivo CSV deve ser um novo registro para o banco de dados, e por fim retorne todas as `transactions` que foram importadas para seu banco de dados. O arquivo csv, deve seguir o seguinte [modelo](./assets/file.csv)

## 🚀 Preview<a name = "preview"></a>

![Gif](https://i.gyazo.com/3e7434d0f54420229f31eac02c3c8ae4.gif)

### Requisitos

Ter instalado pelo menos um gerenciador de pacotes do Node, [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

### Installing

Executar na raiz do projeto o seguinte comando para instalar as dependências

```sh
yarn install
```

ou

```sh
npm install
```

## 🔧 Executando os testes <a name = "tests"></a>

```sh
yarn test
```

### Sobre os testes

Para esse desafio, temos os seguintes testes:

<h4 align="center">
  ⚠️ Antes de rodar os testes, crie um banco de dados com o nome "gostack_desafio06_tests" para que todos os testes possam executar corretamente ⚠️
</h4>

- **`should be able to create a new transaction`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.

* **`should create tags when inserting new transactions`**: Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que não existe, essa seja criada e inserida no campo category_id da transação com o `id` que acabou de ser criado.

- **`should not create tags when they already exists`**: Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que já existe, seja atribuído ao campo category_id da transação com o `id` dessa categoria existente, não permitindo a criação de categorias com o mesmo `title`.

* **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um array de objetos contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa (total de income), retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`.

* **`should be able to delete a transaction`**: Para que esse teste passe, você deve permitir que a sua rota de delete exclua uma transação, e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.

- **`should be able to import transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja importado um arquivo csv, contendo o seguinte [modelo](./assets/file.csv). Com o arquivo importado, você deve permitir que seja criado no banco de dados todos os registros e categorias que estavam presentes nesse arquivo, e retornar todas as transactions que foram importadas.

**Dica**: Caso você tenha dificuldades com a leitura de CSV, temos um [guia no Notion](https://www.notion.so/Importando-arquivos-CSV-com-Node-js-2172338480cb47e28a5d3ed9981c38a0).

## 🎈 Uso <a name="usage"></a>

```sh
yarn dev:server
```

## ⛏️ Construído utilizando <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Postgres](https://www.postgresql.org/)

## ✍️ Authors <a name = "authors"></a>

👤 **Lara Beatriz**

- Twitter: [@LaraBeatrizMS](https://twitter.com/LaraBeatrizMS)
- Github: [@larabeatrizms](https://github.com/larabeatrizms)
- LinkedIn: [@larabeatrizms](https://linkedin.com/in/larabeatrizms)
