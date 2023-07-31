## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
docker run -d --name database-api -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=main -e MYSQL_USER=api -e MYSQL_PASSWORD=apipassword -p 3306:3306 mysql:latest
