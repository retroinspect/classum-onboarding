import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // README /hello 라우트가 중복되어 1번 API와 2번 API를 구분할 수 없음

  // 1. 간단한 GET API를 구현하기
  // @Get('/hello')
  simpleGetAPI(): object {
    return {
      value: "hello world!"
    }
  }

  // 2. Query Parameter를 받는 API 구현하기
  @Get('/hello')
  queryParamAPI(@Query('name') name: string, @Query('age') age: string): object {
    if (name == undefined && age == undefined) {
      return this.simpleGetAPI()
    }

    return {
      success: true,
      data: {
          name: name,
          age: +age
      }
    }
  }

  // 3. Path Paramter를 받는 API 구현하기
  @Get('/coursework/:id/view')
  getCoursework(@Param('id') id: string): object {
    return {
      id: id
    }
  }

  // 4. POST API 구현하기
  @Post('/student')
  postStudent(@Body() studentData): object {
    const { id, name, age } = studentData
    return {
      success: true,
      data: {
        id: id,
        name: name,
        age: age
      }
    }
  }
}
