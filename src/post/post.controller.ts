import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('post')
@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({type: Post, isArray: true})
    @Get('/')
    async getPostList() {
        const result = await this.postService.findAll();
        return result;
    }

    @ApiOperation({ summary: 'Get user of id {id}' })
    @ApiResponse({type: Post})
    @Get('/:id')
    async getPost(@Param('id') id: number) {
        const result = await this.postService.findOne(+id);
        return result;
    }

    @ApiOperation({ summary: 'Post new user' })
    @ApiResponse({type: Post})
    @Post('/')
    async postPost(@Body() postData){
        try {
            const result = await this.postService.create(postData);
            return result;
        }
        catch (err) {
            if (err.code === "ER_NO_REFERENCED_ROW_2") {
                return {
                    message: "Space does not exist"
                }
            }

            return {
                message: "Something went wrong"
            }
        }
    }

    @ApiOperation({ summary: 'Delete user of id {id}' })
    @Delete('/:id')
    deletePost(@Param('id') id: number) {
        return this.postService.delete(+id);
    }

    @ApiOperation({ summary: 'Put user of id {id}' })
    @ApiResponse({type: Post})
    @Put('/:id')
    putPost(@Param('id') id: number, @Body() postData) {
        return this.postService.update(+id, postData);
    }

}
