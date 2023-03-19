import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}
  async findAll(): Promise<Category[]> {
    return this.categoryModel.findAll();
  }

  async findOne(id: number): Promise<Category> {
    return this.categoryModel.findByPk(id);
  }

//   async create(category: Category): Promise<Category> {
//     return this.categoryRepository.create(category);
//   }

//   async update(
//     id: number,
//     category: Category,
//   ): Promise<[number, Category[]]> {
//     return this.categoryRepository.update(category, { where: { id } });
//   }

//   async delete(id: number): Promise<void> {
//     return this.categoryRepository.destroy({ where: { id } });
//   }
}
