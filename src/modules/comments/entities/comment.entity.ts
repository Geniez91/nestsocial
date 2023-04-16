import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Post } from 'src/modules/posts/entities/post.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  idComment: number;

  @Column()
  content: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}
