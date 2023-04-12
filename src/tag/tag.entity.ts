import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from "sequelize-typescript";


@Table({tableName:'tags'})
@ObjectType()
export class Tag extends Model{
    @Column({type:DataType.INTEGER,autoIncrement:true,primaryKey:true}) 
    @Field(()=>ID)
    id:number
    
    @Column({allowNull:false, type:DataType.STRING})
    @Field(()=>String,{nullable:true})
    name:string
    
    @Column({allowNull:false, type:DataType.STRING, unique:true})
    @Field(()=>String)
    slug:string
    
    @Column({allowNull:false, type:DataType.ENUM('active','inactive'),defaultValue:'active'})
    @Field(()=>String)
    status:string
    
    @CreatedAt public createdAt:Date;
    @UpdatedAt public updatedAt:Date;
}