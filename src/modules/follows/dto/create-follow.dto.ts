import { User } from 'src/modules/users/entities/user.entity';

export class CreateFollowDto {
  follower: User;
  followed: User;
}
