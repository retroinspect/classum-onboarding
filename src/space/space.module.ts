import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserModule } from 'src/user/user.module';
import { SpaceController } from './space.controller';
import { Space } from './space.entity';
import { SpaceService } from './space.service';

@Module({
  imports: [TypeOrmModule.forFeature([Space, User])],
  controllers: [SpaceController],
  providers: [SpaceService]
})
export class SpaceModule {}
