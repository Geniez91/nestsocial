import { Post } from 'src/modules/posts/entities/post.entity';

export class CreateCommentDto {
  content: string;
  post: Post;
}
