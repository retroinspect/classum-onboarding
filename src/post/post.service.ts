import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostDto } from './post.dto';
import { Post } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
    constructor(@InjectRepository(Post) private readonly postRepository: PostRepository) { }

    findAll(): Promise<Post[]> {
        return this.postRepository.find()
    }

    findOne(id: number) {
        return this.postRepository.findOne(id)
    }

    create(createPostDto: PostDto) {
        return this.postRepository.save(createPostDto)
}

    delete(id: number) {
        return this.postRepository.delete(id)
    }

    update(id: number, updatePostDto: PostDto) {
        return this.postRepository.update(id, updatePostDto)
    }

}
