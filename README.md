# 클라썸 온보딩 미니 과제

5. typeORM으로 mysql 테이블 만들어 보기
```bash
# 
$ npm run make:migrations

# 
$ npm run make:migrate

# 
$ npm run make:rollback
```


6. typeORM으로 다음 테이블 만들고 릴레이션 매핑해보기
7. 위에 테이블에 데이터를 CRUD 하는 API 만들기

CRUD API 목록

POST /user
POST /space
POST /post

GET /user/:id
GET /space/:id
GET /post/:id

PUT /user/:id
PUT /space/:id
PUT /post/:id
 
DELETE /user/:id
DELETE /space/:id
DELETE /post/:id


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
