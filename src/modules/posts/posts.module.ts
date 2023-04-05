import { Module } from '@nestjs/common';
import { PostController } from './controllers/post/post.controller';
import { PostService } from './services/post/post.service';
import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';

@Module({
  controllers: [PostController],
  providers: [PostService]
})
export class PostsModule {}
