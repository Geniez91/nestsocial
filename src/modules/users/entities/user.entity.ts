import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from 'src/modules/posts/entities/post.entity';
import { Follow } from 'src/modules/follows/entities/follow.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  date_of_birth: Date;

  @Column()
  profil_image: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Follow, (follow) => follow.follower)
  following: Follow[];

  @OneToMany(() => Follow, (follow) => follow.followed)
  followers: Follow[];
}
