import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const newComments = this.commentsRepository.create(createCommentDto);
    return this.commentsRepository.save(newComments);
  }

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find();
  }

  findOne(id: number): Promise<Comment | null> {
    const params: FindOneOptions<Comment> = {
      where: { idComment: id },
    };
    return this.commentsRepository.findOne(params);
  }

  async update(
    id: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    const oldComments = await this.commentsRepository.findOneBy({
      idComment: id,
    });
    const updatedPost = Object.assign(oldComments, updateCommentDto);
    return this.commentsRepository.save(updatedPost);
  }

  async remove(id: number): Promise<Comment> {
    const deleteComment = await this.commentsRepository.findOneBy({
      idComment: id,
    });
    await this.commentsRepository.delete(deleteComment);
    return deleteComment;
  }
}
