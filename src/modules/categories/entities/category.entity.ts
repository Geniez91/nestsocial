import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from 'src/modules/posts/entities/post.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  idCategory: number;

  @Column()
  Name: string;

  @OneToMany(() => Post, (post) => post.category)
  posts: Post[];
}
