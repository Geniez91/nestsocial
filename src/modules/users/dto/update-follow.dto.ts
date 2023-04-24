import { User } from '../entities/user.entity';

export class UpdateUserFollowDto {
  user: User;

  constructor(user: User) {
    this.user = user;
  }
}
