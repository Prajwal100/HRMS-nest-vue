import { Field, Int } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

export class GetQueryDataArgs{
    @Field(()=>Int,{nullable:true})
    @IsOptional()
    page?:number
    
    @Field(()=>Int,{nullable:true})
    @IsOptional()
    limit?:number
    
    @Field(()=>String,{nullable:true})
    @IsOptional()
    searchPhrase?:string
    
}