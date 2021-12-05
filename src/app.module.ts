import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { SpaceModule } from './space/space.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    SpaceModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
