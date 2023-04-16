import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
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
}
