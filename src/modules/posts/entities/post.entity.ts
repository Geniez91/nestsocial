import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Category } from 'src/modules/categories/entities/category.entity';
import { Comment } from 'src/modules/comments/entities/comment.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  idPost: number;

  @Column()
  title: string;

  @Column()
  Description: string;

  @Column()
  video: string;

  @ManyToOne(() => User, (user) => user.posts, { eager: true })
  user: User;

  @ManyToOne(() => Category, (category) => category.posts, { eager: true })
  category: Category;

  @OneToMany(() => Comment, (comment) => comment.post, {
    eager: true,
    cascade: true,
  })
  comments: Comment[];
}
