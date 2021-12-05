import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpaceDto } from './space.dto';
import { Space } from './space.entity';
import { SpaceRepository } from './space.repository';

@Injectable()
export class SpaceService {
    constructor(@InjectRepository(Space) private readonly spaceRepository: SpaceRepository) { }

    findAll(): Promise<Space[]> {
        return this.spaceRepository.find()
    }

    findOne(id: number) {
        return this.spaceRepository.findOne(id)
    }

    create(createSpaceDto: SpaceDto) {
        return this.spaceRepository.save(createSpaceDto)
}

    delete(id: number) {
        return this.spaceRepository.delete(id)
    }

    update(id: number, updateSpaceDto: SpaceDto) {
        return this.spaceRepository.update(id, updateSpaceDto)
    }

}
