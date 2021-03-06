import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { Post } from './post.entity';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
