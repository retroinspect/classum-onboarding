import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('/')
    async getPostList() {
        const result = await this.postService.findAll();
        return result;
    }

    @Get('/:id')
    async getPost(@Param('id') id: string) {
        const result = await this.postService.findOne(+id);
        return result;
    }

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

    @Delete('/:id')
    deletePost(@Param('id') id: string) {
        return this.postService.delete(+id);
    }

    @Put('/:id')
    putPost(@Param('id') id: string, @Body() postData) {
        return this.postService.update(+id, postData);
    }

}
