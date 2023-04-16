import { User } from 'src/modules/users/entities/user.entity';
import { Category } from 'src/modules/categories/entities/category.entity';

export class CreatePostDto {
  title: string;
  Description: string;
  user: User;
  category: Category;
}
