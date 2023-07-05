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
npm install

# run in dev mode on port 3000
npm run start:dev

# generate production build
npm run build

# run generated content in dist folder on port 3000
npm run start:prod
```

## Running the app in sites

Execute:

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

| Variable             | Description                          | Default                                                                           |
|----------------------|--------------------------------------|-----------------------------------------------------------------------------------|
| PORT                 | Port to run the server               | 3000                                                                              |
| DB_TYPE              | Database type                        | postgres                                                                          |
| DB_HOST              | Database host                        | localhost                                                                         |
| DB_PORT              | Database port                        | 5432                                                                              |
| DB_DATABASE          | Database name                        | postgres                                                                          |
| DB_USERNAME          | Database username                    | postgres                                                                          |
| DB_PASSWORD          | Database password                    | postgres                                                                          |
| DEBUG                | Debug mode                           | false                                                                             |
| URL_GATEWAY          | URL Gateway                          | http://localhost:3000                                                             |
| URL_PILA             | URL Pila                             | https://marketplacepreproduccion.aportesenlinea.com                               |
| PILA_TRANSVERSALES   | pila transversales                   | Transversales.Servicios.Fachada                                                   |
| PILA_FANAIA          | pila FANIA                           | Fanaia.Servicios.Fachada                                                          |
| APPLICATION_TEST     | Application test, GUUID PILA SERVICE | E2271FA7-0FCA-4293-BF6D-53414286FDB0                                              |
| SCHEDULED_JOB        | Scheduled job, cron expression       | */10 * * * * *                                                                    |
| QUEUS_NUMBER         | Number of queues                     | 5                                                                                 |
| QUEUES_ATTEMPTS      | Number of attempts                   | 1                                                                                 |
| QUEUES_BACKOFF       | Backoff time                         | 1000                                                                              |
| URL_RETORNO_PSE_PILA | URL Retorno PSE Pila                 | http://localhost:3000                                                             |
| PILA_FANAIA_PAGOS    | Pila Fanaia Pagos                    | Fanaia.Pagos.Servicios.Fachada                                                    |
| URL_REPORTES_PILA    | URL Pila Certificado de aportes      | https://aplicacionespruebas.aportesenlinea.com/Reportes.ServicioWeb               |
