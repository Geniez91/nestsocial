import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Follow {
  @PrimaryGeneratedColumn()
  idFollow: number;

  @ManyToOne(() => User, (user) => user.following)
  follower: User;

  @ManyToOne(() => User, (user) => user.followers)
  followed: User;
}
