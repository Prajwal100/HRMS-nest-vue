import { Field, ObjectType } from '@nestjs/graphql';
import {Table,Column,Model} from 'sequelize-typescript'

@Table({tableName:'categories'})
@ObjectType()
export class Category extends Model{
   @Column
   @Field(()=>String)
   title:string;
   
   @Column
   @Field(()=>String)
   image:string;
}