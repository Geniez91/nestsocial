import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(newCategory);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: number): Promise<Category | null> {
    const params: FindOneOptions<Category> = {
      where: { idCategory: id },
    };
    return this.categoryRepository.findOne(params);
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const oldCategory = await this.categoryRepository.findOneBy({
      idCategory: id,
    });
    const updatedCategory = Object.assign(oldCategory, updateCategoryDto);
    return this.categoryRepository.save(updatedCategory);
  }

  async remove(id: number): Promise<Category> {
    const deleteCategory = await this.categoryRepository.findOneBy({
      idCategory: id,
    });
    await this.categoryRepository.delete(deleteCategory);
    return deleteCategory;
  }
}
