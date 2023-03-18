import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryResolver]
})
export class CategoryModule {}
