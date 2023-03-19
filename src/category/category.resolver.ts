import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
@Resolver(()=>Category)
export class CategoryResolver {
    constructor(private readonly categoryService: CategoryService){}
    
    @Query(()=>[Category],{name:'Category',nullable:true})
    async categories():Promise<Category[]> {
        return this.categoryService.findAll();
    }
    
    // @Query(()=>Category)
    // async category(@Args('id') id:number):Promise<Category> {
    //     return this.categoryService.findOne(id);
    // }
    
    // @Mutation()
    // async createCategory(@Args('category') category:Category):Promise<Category> {
    //     return this.categoryService.create(category);
    // }
    
    // @Mutation()
    // async updateCategory(@Args('id') id:number, @Args('category') category:Category):Promise<[number, Category[]]> {
    //     return this.categoryService.update(id, category);
    // }
    
    // @Mutation()
    // async deleteCategory(@Args('id') id:number):Promise<void>{
    //     return this.categoryService.delete(id)
    // }
}
