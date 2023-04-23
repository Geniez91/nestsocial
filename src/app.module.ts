import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { FollowsModule } from './modules/follows/follows.module';
import { CommentsModule } from './modules/comments/comments.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { LikesModule } from './modules/likes/likes.module.ts';
import { User } from './modules/users/entities/user.entity';
import { Post } from './modules/posts/entities/post.entity';
import { Comment } from './modules/comments/entities/comment.entity';
import { Follow } from './modules/follows/entities/follow.entity';
import { Category } from './modules/categories/entities/category.entity';
import { DataSource } from 'typeorm';
import { LikesService } from './likes/likes.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjssocial',
      entities: [User, Post, Comment, Follow, Category],
      synchronize: true, // crée les tables de la db
    }),
    UsersModule,
    PostsModule,
    FollowsModule,
    CommentsModule,
    CategoriesModule,
    LikesModule,
  ],
  controllers: [AppController],
  providers: [AppService, LikesService],
})
export class AppModule {}
