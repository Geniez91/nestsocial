import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [],
})
export class CategoryModule {}
