import { Field, Int, ObjectType } from '@nestjs/graphql';
import {Table,Column,Model} from 'sequelize-typescript'

@Table({tableName:'categories'})
@ObjectType()
export class Category extends Model{
  @Column({autoIncrement:true,primaryKey:true})
  @Field(()=>Int)
  id:number;
   
   @Column
   @Field(()=>String)
   title:string;
   
   @Column
   @Field(()=>String,{nullable:true})
   image:string;
   
   @Column
   @Field(()=>String)
   status:string;
}