import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiProperty } from '@nestjs/swagger';

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

class Data {
  @ApiProperty()
  name: LogLevel;
  @ApiProperty()
  age: 1 | 20;    
}

class HelloWithQueryResponse {
  @ApiProperty({ description: "성공 여부"})
  success: boolean = true;

  @ApiProperty({ description: "쿼리 정보"})
  data: Data;
}

class HelloResponse {
  @ApiProperty()
  value: string;
}

@ApiTags('1-4번 태스크 API')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: '2. Query Parameter를 받는 API 구현하기' })
  @ApiResponse({type: HelloWithQueryResponse})
  @Get('/hello?')
  queryParamAPI(@Query('name') name: string, @Query('age') age: number): object {
    // README /hello 라우트가 중복되어 1번 API와 2번 API를 구분할 수 없으므로, name과 age 모두 undefined인 경우 /hello인 것으로 처리
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

  @ApiOperation({ summary: '1. 간단한 GET API를 구현하기' })
  @Get('/hello')
  @ApiResponse({ description: `{
    value: "hello world!"
  }`})
  simpleGetAPI(): object {
    return {
      value: "hello world!"
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
