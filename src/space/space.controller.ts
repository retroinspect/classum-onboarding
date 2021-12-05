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
    async getSpace(@Param('id') id: string) {
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
            if (err.code === "ER_NO_REFERENCED_ROW_2") {
                return {
                    message: "User does not exist"
                }
            }

            return {
                message: "Something went wrong"
            }
        }
    }

    @Delete('/:id')
    deleteSpace(@Param('id') id: string) {
        return this.spaceService.delete(+id);
    }

    @Put('/:id')
    putSpace(@Param('id') id: string, @Body() spaceData) {
        return this.spaceService.update(+id, spaceData);
    }

}
