import { CreateTagInput } from './dto/create-tag.input';
import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';
import { UpdateTagInput } from './dto/update-tag.input';
import { DeleteTagInput } from './dto/delete-tag.input';
@Resolver(()=>Tag)
export class TagResolver {
    constructor(private readonly tagService:TagService){}
    
    
    @Query(()=>[Tag],{name:"tags",nullable:true})
    async findAll():Promise<Tag[]>{
        return await this.tagService.findAll();
    }
    
    @Query(()=>Tag,{name:"tag",nullable:true})
    async findOne(@Args('id') id:number):Promise<Tag>{
        return await this.tagService.findOne(id);
    }
    
    @Mutation(()=>Tag,{name:'createTag',nullable:true})
    async createTag(@Args('createTagInput') createTagInput: CreateTagInput){
        return await this.tagService.create(createTagInput);
    }
    
    @Mutation(()=>Tag,{name:'updateTag',nullable:true})
    async updateTag(@Args('id') id:number,@Args('updateTagInput') updateTagInput: UpdateTagInput){
        return await this.tagService.update(id,updateTagInput);
    }
    
    @Mutation(()=>DeleteTagInput,{name:'deleteTag',nullable:true})
    async deleteTag(@Args('id') id:number){
        return await this.tagService.delete(id);
    }
    
}
