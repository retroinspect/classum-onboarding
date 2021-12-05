import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/')
    async getUserList() {
        const result = await this.userService.findAll();
        return result;
    }

    @Get('/:id')
    async getUser(@Param('id') id: string) {
        const result = await this.userService.findOne(+id);
        return result;
    }

    @Post('/')
    async postUser(@Body() userData){
        const result = await this.userService.create(userData);
        return result;
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string) {
        return this.userService.delete(+id);
    }

    @Put('/:id')
    putUser(@Param('id') id: string, @Body() userData) {
        return this.userService.update(+id, userData);
    }

}
