import { Injectable } from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Follow } from './entities/follow.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class FollowsService {
  constructor(
    @InjectRepository(Follow)
    private readonly followRepository: Repository<Follow>,
  ) {}
  create(createFollowDto: CreateFollowDto): Promise<Follow> {
    const newFollow = this.followRepository.create(createFollowDto);
    return this.followRepository.save(newFollow);
  }

  findAll(): Promise<Follow[]> {
    return this.followRepository.find();
  }

  findOne(id: number): Promise<Follow | null> {
    const params: FindOneOptions<Follow> = {
      where: { idFollow: id },
    };
    return this.followRepository.findOne(params);
  }

  async update(id: number, updateFollowDto: UpdateFollowDto): Promise<Follow> {
    const oldFollow = await this.followRepository.findOneBy({
      idFollow: id,
    });
    const updateFollow = Object.assign(oldFollow, updateFollowDto);
    return this.followRepository.save(updateFollow);
  }

  async remove(id: number): Promise<Follow> {
    const deletefollow = await this.followRepository.findOneBy({
      idFollow: id,
    });
    await this.followRepository.delete(deletefollow);
    return deletefollow;
  }
}
