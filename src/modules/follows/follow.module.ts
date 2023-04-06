import { Module } from '@nestjs/common';
import { FollowService } from './services/follow.service';
import { FollowController } from './controllers/follow.controller';

@Module({
  providers: [FollowService],
  controllers: [FollowController],
})
export class FollowModule {}
