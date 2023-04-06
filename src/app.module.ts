import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { CategoryModule } from './modules/categories/category.module';
import { CommentModule } from './modules/comments/comment.module';
import { FollowModule } from './modules/follows/follow.module';
import { PostsModule } from './modules/posts/post.module';

@Module({
  imports: [
    UserModule,
    CategoryModule,
    CommentModule,
    FollowModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
