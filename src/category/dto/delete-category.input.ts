import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()

export class DeleteCategoryDTO{
   
    @Field(()=>Boolean)
    success:boolean
    
    @Field(()=>String)
    message:string
}