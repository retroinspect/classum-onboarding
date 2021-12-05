import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { SpaceService } from './space.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Space } from './space.entity';

@ApiTags('space')
@Controller('space')
export class SpaceController {
    constructor(private readonly spaceService: SpaceService) {}

    @ApiOperation({ summary: 'Get all spaces' })
    @ApiResponse({type: Space, isArray: true})
    @Get('/')
    async getSpaceList() {
        const result = await this.spaceService.findAll();
        return result;
    }

    @ApiOperation({ summary: 'Get space of id {id}' })
    @ApiResponse({type: Space})
    @Get('/:id')
    async getSpace(@Param('id') id: number) {
        const result = await this.spaceService.findOne(+id);
        return result;
    }

    @ApiOperation({ summary: 'Post new space' })
    @ApiResponse({type: Space})
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

    @ApiOperation({ summary: 'Delete space of id {id}' })
    @Delete('/:id')
    deleteSpace(@Param('id') id: number) {
        return this.spaceService.delete(+id);
    }

    @ApiOperation({ summary: 'Put space of id {id}' })
    @ApiResponse({type: Space})
    @Put('/:id')
    putSpace(@Param('id') id: number, @Body() spaceData) {
        return this.spaceService.update(+id, spaceData);
    }

}
