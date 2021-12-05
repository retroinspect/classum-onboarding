import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { SpaceDto } from './space.dto';
import { Space } from './space.entity';
import { SpaceRepository } from './space.repository';

@Injectable()
export class SpaceService {
    constructor(@InjectRepository(Space) private readonly spaceRepository: SpaceRepository, @InjectRepository(User) private readonly userRepository: UserRepository) { }
    // constructor(@InjectRepository(Space) private readonly spaceRepository: SpaceRepository) { }

    findAll(): Promise<Space[]> {
        return this.spaceRepository.find({relations: ["user_id"]})
    }

    findOne(id: number) {
        return this.spaceRepository.findOne(id)
    }

    async create(createSpaceDto: SpaceDto) {
        const user: User | null = await this.userRepository.findOne(createSpaceDto.user_id)
        if (user)
            return this.spaceRepository.save(createSpaceDto)
        return {
            message: `User of id ${createSpaceDto.user_id} does not exist`
        }
}

    delete(id: number) {
        return this.spaceRepository.delete(id)
    }

    update(id: number, updateSpaceDto: SpaceDto) {
        return this.spaceRepository.update(id, updateSpaceDto)
    }

}
