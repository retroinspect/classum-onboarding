import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({type: User, isArray: true})
    @Get('/')
    async getUserList() {
        const result = await this.userService.findAll();
        return result;
    }
    @ApiOperation({ summary: 'Get user of id {id}' })
    @ApiResponse({type: User})
    @Get('/:id')
    async getUser(@Param('id') id: number) {
        const result = await this.userService.findOne(+id);
        return result;
    }

    @ApiOperation({ summary: 'Post new user' })
    @ApiResponse({type: User})
    @Post('/')
    async postUser(@Body() userData){
        const result = await this.userService.create(userData);
        return result;
    }

    @ApiOperation({ summary: 'Delete user of id {id}' })
    @Delete('/:id')
    deleteUser(@Param('id') id: number) {
        return this.userService.delete(+id);
    }

    @ApiOperation({ summary: 'Put user of id {id}' })
    @ApiResponse({type: User})
    @Put('/:id')
    putUser(@Param('id') id: number, @Body() userData) {
        return this.userService.update(+id, userData);
    }

}
