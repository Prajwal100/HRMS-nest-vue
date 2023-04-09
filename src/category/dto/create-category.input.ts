import { Field, InputType } from "@nestjs/graphql";
import {IsOptional} from 'class-validator'
@InputType()

export class CreateCategoryInput{
    @Field(()=>String)
    title:string
    
    @Field(()=>String)
    @IsOptional()
    image:string
    
    @Field(()=>String)
    status:string
}