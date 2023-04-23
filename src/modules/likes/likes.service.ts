import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { DeleteLikeDto } from './dto/delete-like.dto';

@Injectable()
export class LikesService {
    
    createLike(CreateLikeDto: CreateLikeDto) {
        return 'This action adds a new Like';
      }

      findAllLike() {
        return `This action returns all like`;
      }
    
      findOneLike(id: number) {
        return `This action returns a #${id} like`;
      }

      deleteLike(DeleteLikeDto: DeleteLikeDto) {
        return `This action delete a exiting like`;
      }


}
