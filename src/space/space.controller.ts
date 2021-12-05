import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { SpaceService } from './space.service';

@Controller('space')
export class SpaceController {
    constructor(private readonly spaceService: SpaceService) {}

    @Get('/')
    async getSpaceList() {
        const result = await this.spaceService.findAll();
        return result;
    }

    @Get('/:id')
    async getSpace(@Param('id') id: number) {
        const result = await this.spaceService.findOne(+id);
        return result;
    }

    @Post('/')
    async postSpace(@Body() spaceData){
        try {
            const result = await this.spaceService.create(spaceData);
            return result;
        }
        catch (err) {
            return {
                error: err
            }
        }
    }

    @Delete('/:id')
    deleteSpace(@Param('id') id: number) {
        return this.spaceService.delete(+id);
    }

    @Put('/:id')
    putSpace(@Param('id') id: number, @Body() spaceData) {
        return this.spaceService.update(+id, spaceData);
    }

}
