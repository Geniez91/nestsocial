import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserFollowDto } from './dto/update-follow.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get(':id/followers')
  async getFollowers(@Param('id') id: number): Promise<User[]> {
    return await this.usersService.getUsersFollowingMe(id);
  }

  @Get(':id/following')
  async getFollowing(@Param('id') id: number): Promise<User[]> {
    return await this.usersService.getUsersIFollow(id);
  }

  @Patch(':id/follow')
  async followUser(@Param('id') id: number, @Body() body: User): Promise<void> {
    return await this.usersService.followUser(id, body);
  }

  // @Post(':id/unfollow')
  // async unfollowUser(
  //   @Param('id') id: number,
  //   @Body() body: UpdateUserFollowDto
  // ): Promise<void> {
  //   return await this.usersService.unfollowUser(id, body);
  // }
}
