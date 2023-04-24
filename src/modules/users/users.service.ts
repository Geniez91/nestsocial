import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { UpdateUserFollowDto } from './dto/update-follow.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    const params: FindOneOptions<User> = {
      where: { idUser: id },
    };
    return this.userRepository.findOne(params);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const oldUser = await this.userRepository.findOneBy({
      idUser: id,
    });
    const updatedUser = Object.assign(oldUser, updateUserDto);
    return this.userRepository.save(updatedUser);
  }

  async remove(id: number): Promise<User> {
    const deleteUser = await this.userRepository.findOneBy({
      idUser: id,
    });
    await this.userRepository.delete(deleteUser);
    return deleteUser;
  }

  async getUsersFollowingMe(idUser: number): Promise<User[]> {
    return this.userRepository.find({
      relations: ['followers', 'following'],
      where: { idUser },
    });
  }

  async getUsersIFollow(idUser: number): Promise<User[]> {
    return this.userRepository.find({
      relations: ['following', 'followers'],
      where: { idUser },
    });
  }

  async followUser(id: number, userFollow: User): Promise<void> {
    const userFollowed: FindOneOptions<User> = {
      relations: ['followers'],
      where: {
        idUser: id,
      },
    };

    const getUserFollowed = await this.userRepository.findOneOrFail(
      userFollowed
    );

    const userFollowing: FindOneOptions<User> = {
      relations: ['following'],
      where: { idUser: userFollow.idUser },
    };

    const getUserFollowing = await this.userRepository.findOneOrFail(
      userFollowing
    );

    getUserFollowed.followers.push(getUserFollowing);
    getUserFollowing.following.push(getUserFollowed);

    await this.userRepository.save(getUserFollowed);
    await this.userRepository.save(getUserFollowing);

    // const userDTO = new UpdateUserFollowDto(getUserFollowed);
  }
}
