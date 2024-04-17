###### English

# Fullstack Boilerplate for MERN with Typescript

A simple boilerplate designed to get backend projects up and running quickly using NodeJS, NestJS and Prisma with Typescript, while providing a consistent developer experience, with tools like Volta, Husky, Lint-staged and ESLint.

### Features

- Consistent code standards: on every commit Husky executes Lint-staged, running linters, formating with Prettier and type checking all staged files.
- Linters: ESLint for .tsx and .ts files and Stylelint for .scss and .css files

- Standardized commit messages with Commitlint and Angular Conventional Commits

- Docker: easily run the whole app with a single command

- Node version locking with Volta locally

### Requirements

- Node ^20.12.2

- npm ^10.5.0

- Docker if you want to use it to run the app

- Volta if you want to automatically manage Node and npm versions

### Getting started

#### With Docker:

To use this boilerplate:

```shell
git clone https://github.com/igordosreis/boilerplate-fullstack project-name
cd project-name
npm run setup
```

Or click the 'Use this template' button at the top of this repository and then clone the newly created repository. After cloning, run in the root folder of the project:

```shell
npm run setup
```
