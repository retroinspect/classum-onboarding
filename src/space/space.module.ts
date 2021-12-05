import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpaceController } from './space.controller';
import { Space } from './space.entity';
import { SpaceService } from './space.service';

@Module({
  imports: [TypeOrmModule.forFeature([Space])],
  controllers: [SpaceController],
  providers: [SpaceService]
})
export class SpaceModule {}
