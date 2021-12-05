import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: UserRepository) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find()
    }

    findOne(id: number) {
        return this.userRepository.findOne(id)
    }

    create(createUserDto: UserDto) {
        return this.userRepository.create(createUserDto).save()
    }

    async delete(id: number) {
        return this.userRepository.delete(id)
    }

    update(id: number, updateUserDto: UserDto) {
        return this.userRepository.update(id, updateUserDto)
    }

}
