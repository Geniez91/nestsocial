import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = this.postRepository.create(createPostDto);
    return this.postRepository.save(newPost);
  }

  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  findOne(id: number): Promise<Post | null> {
    const params: FindOneOptions<Post> = {
      where: { idPost: id },
    };
    return this.postRepository.findOne(params);
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const oldPost = await this.postRepository.findOneBy({
      idPost: id,
    });
    const updatedPost = Object.assign(oldPost, updatePostDto);
    return this.postRepository.save(updatedPost);
  }

  async remove(id: number): Promise<Post> {
    const deletePost = await this.postRepository.findOneBy({
      idPost: id,
    });
    await this.postRepository.remove(deletePost);
    return deletePost;
  }
}
