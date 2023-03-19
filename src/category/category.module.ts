import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './category.entity';
import { Sequelize } from 'sequelize-typescript';

@Module({
  imports:[SequelizeModule.forFeature([
    Category
  ])],
  providers: [CategoryService, CategoryResolver,{
    provide:'SEQUELIZE',useExisting:Sequelize
  }],
  exports:[SequelizeModule]
})
export class CategoryModule {}
