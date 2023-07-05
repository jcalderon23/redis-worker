# TypeScript Express API Bootstrap (base / project starter)

This is a repository intended to serve as a starting point if you want to bootstrap a express API project in TypeScript.

## Features

- [TypeScript](https://www.typescriptlang.org/) (v4)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
  - [Import plugin](https://github.com/benmosher/eslint-plugin-import/)
- [Jest](https://jestjs.io) with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push

## Running the app in localhost

```
# install dependencies
npm install --legacy-peer-deps

# copy .env.example to .env
cp .env.example .env

# run in dev mode on port 4000
npm run start:dev

# generate production build
npm run build

# run generated content in dist folder on port 4000
npm run start:prod
```

## Running the app in sites

```
# Create or up container
docker-compose up -d
# Or
# Rebuild and up container
docker-compose up -d --build
```

## Testing

### Jest with supertest

```
npm run test
```

## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```

## Environment variables

| Variable    | Description                    | Default                    |
| ----------- | ------------------------------ | -------------------------- |
| PORT        | Port to run the server         | 4000                       |
| DATABASE    | Name database                  | aelTraceability            |
| MONGO_URL   | Url to connect to the database | mongodb://localhost:27017/ |
| DEBUG       | Debug mode                     | false                      |
| ENVIROMENT  | Enviroment (Dev, Qa, Prod)     | Qa                         |
| URL_GATEWAY | URL Gateway                    | http://localhost:8080      |
