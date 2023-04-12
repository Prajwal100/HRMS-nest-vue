import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTagInput{
    @Field(()=>String)
    name:string;
    
    @Field(()=>String)
    slug:string;
    
    @Field(()=>String)
    status:string
}