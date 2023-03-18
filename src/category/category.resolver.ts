import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import {Category} from '../../models/category.model';
@Resolver('Category')
export class CategoryResolver {
    constructor(private categoryService: CategoryService){}
    
    @Query()
    async categories():Promise<Category[]> {
        return this.categoryService.findAll();
    }
    
    @Query()
    async category(@Args('id') id:number):Promise<Category> {
        return this.categoryService.findOne(id);
    }
    
    @Mutation()
    async createCategory(@Args('category') category:Category):Promise<Category> {
        return this.categoryService.create(category);
    }
    
    @Mutation()
    async updateCategory(@Args('id') id:number, @Args('category') category:Category):Promise<Category[]> {
        return this.categoryService.update(id, category);
    }
    
    @Mutation()
    async deleteCategory(@Args('id') id:number):Promise<number>{
        return this.categoryService.delete(id)
    }
}
