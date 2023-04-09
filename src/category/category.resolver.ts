import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { DeleteCategoryDTO } from './dto/delete-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
@Resolver(()=>Category)
export class CategoryResolver {
    constructor(private readonly categoryService: CategoryService){}
    
    @Query(()=>[Category],{name:'categories',nullable:true})
    async categories():Promise<Category[]> {
        return this.categoryService.findAll();
    }
    
    @Query(()=>Category,{name:"category",nullable:true})
    async category(@Args('id') id:number):Promise<Category> {
        return this.categoryService.findOne(id);
    }
    
    @Mutation(()=>Category,{nullable:true})
    async createCategory(@Args('createCategoryInput') createCategoryInput:CreateCategoryInput) {
        return await this.categoryService.create(createCategoryInput);
    }
    
    @Mutation(()=>Category)
    async updateCategory(@Args('id') id:number, @Args('updateCategoryInput') updateCategoryInput:UpdateCategoryInput) {
        return await this.categoryService.update(id, updateCategoryInput);
    }
    
    @Mutation(()=>DeleteCategoryDTO)
    async deleteCategory(@Args('id') id:number){
        return await this.categoryService.delete(id)
    }
}
