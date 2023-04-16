import { PartialType } from '@nestjs/mapped-types';
import { CreateFollowDto } from './create-follow.dto';
import { User } from 'src/modules/users/entities/user.entity';

export class UpdateFollowDto extends PartialType(CreateFollowDto) {
  follower: User;
  followed: User;
}
