# 클라썸 온보딩 미니 과제

## 태스크 목록
1. 간단한 GET API를 구현하기
2. Query Parameter를 받는 API 구현하기
3. Path Paramter를 받는 API 구현하기
4. POST API 구현하기
5. typeORM으로 mysql 테이블 만들어 보기
6. typeORM으로 다음 테이블 만들고 릴레이션 매핑해보기
7. 위에 테이블에 데이터를 CRUD 하는 API 만들기


## 질문
1. 다른 모듈의 레포지토리 혹은 기타 프로바이더를 디펜던시로 사용하려면 어떻게 해야할까?
 예를 들어 만약 user table에 likes(좋아요)라는 컬럼을 추가하고, likes >= 20인 user만 space를 개설/참여할 수 있게 한다면 SpaceService에서 UserRepository에 접근 가능해야 한다.  

2. GET /user/:id의 id와 같은 파라미터의 경우 url의 일부이므로 항상 string으로 입력되지만, 엔티티 상에서는 number로 정의된다. 이 때 컨트롤러에서 파라미터의 id의 타입을 string으로 해야할까, number로 해야할까?

- string으로 할 때 장점: 실제 입력의 타입과 일치하므로, 개발자가 이후 타입 변환 등을 할 때 헷갈리지 않는다.
- number로 할 때 장점: swagger 등으로 API 명세를 만들었을 때 입력으로 가능한 타입이 명확해진다.

3. /hello와 /hello?name={name}&age={age}는 항상 같은 라우트로 취급된다. 어떻게 하면 이처럼 쿼리스트링을 사용할 경우와 아닌 경우를 다른 라우트로 처리할 수 있을까?
- 현재로써는 쿼리 파라미터가 모두 undefined인 경우 /hello인 것으로 처리함

4. swagger로 API 명세를 만들 때 @ApiProperty() 데코레이터를 사용하면 enum type이나 값으로 특정된 타입 등이 제대로 표현되지 않는 것 같은데, 이런 경우 명세의 response 예시를 특정해서 보여줄 수는 없을까?

```typescript
type LogLevel = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG'

class Data {
  @ApiProperty()
  logLevel: LogLevel;
}

@Controller()
export class AppController {

  @ApiOperation()
  @ApiResponse({type: Data})
  @Get('/logLevel')
  getLogLevel() {
      return {
        logLevel: 'ERROR'
      }
  }

}
```

<b>swagger api example respone:<b>
```json
{
    "logLevel": "string"
}
```
<b>response 예시를 특정해서 보여주는 경우 (expected behavior)<b>
```json
{
    "logLevel": "ERROR"
}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

