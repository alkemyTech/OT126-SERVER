# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```
generates 10 standard account users and 10 administrator account users with the credentials:

| Email | Password | Name | roleId |
| ------------- | ------------- | ------------- | ----------- |
| standard-test-@test.com  | TestPassword123!  | Standard Test | 1 |
| standard-test-Eduardo@Corgniali.com  | TestPassword123!  | Eduardo Corgniale | 1 |
| standard-test-Ezequiel@Baruer.com  | TestPassword123!  | Ezequiel Baruer | 1 |
| standard-test-@test.com  | TestPassword123!  | Standard Test | 1 |
| standard-test-Eduardo@Corgniali.com  | TestPassword123!  | Eduardo Corgniale | 1 |
| standard-test-Ezequiel@Baruer.com  | TestPassword123!  | Ezequiel Baruer | 1 |
| standard-test-@test.com  | TestPassword123!  | Standard Test | 1 |
| standard-test-Eduardo@Corgniali.com  | TestPassword123!  | Eduardo Corgniale | 1 |
| standard-test-Ezequiel@Baruer.com  | TestPassword123!  | Ezequiel Baruer | 1 |
| standard-test-@test.com  | TestPassword123!  | Standard Test | 1 |
| standard-test-Eduardo@Corgniali.com  | TestPassword123!  | Eduardo Corgniale | 1 |
| standard-test-Ezequiel@Baruer.com  | TestPassword123!  | Ezequiel Baruer | 1 |




## Start local server

``` bash
npm start
```
