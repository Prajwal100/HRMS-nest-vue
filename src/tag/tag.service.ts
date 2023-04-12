import { UpdateTagInput } from './dto/update-tag.input';
import {Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from './tag.entity';
import { Sequelize } from 'sequelize-typescript';
import { CreateTagInput } from './dto/create-tag.input';

@Injectable()
export class TagService {
    constructor(
        @InjectModel(Tag)
        private readonly tagRepository: typeof Tag,
        @Inject('SEQUELIZE')
        private readonly sequelize:Sequelize
    ){}
    async findAll():Promise<Tag[]>{
        const transaction=await this.sequelize.transaction();
        try{
            const tagData=await this.tagRepository.findAll();
            
            if(!tagData){
                throw new Error('Tag not found.');
            }
            
            await transaction.commit();
            return tagData;
        }
        catch(err){
            await transaction.rollback();
            throw new Error(err.message);
        }
    }
    
    async findOne(id:number):Promise<Tag>{
        const transaction=await this.sequelize.transaction();
        try{
            const tagData=await this.tagRepository.findByPk(id);
            
            if(!tagData){
                throw new Error('Tag not found.');
            }
            
            await transaction.commit();
            return tagData;
        }
        catch(err){
            await transaction.rollback();
            throw new Error(err.message);
        }
    }
    
    async create(createTagInput:CreateTagInput){
        const transaction=await this.sequelize.transaction();
        const {
            name,
            slug,
            status
        }=createTagInput;
        try{
            const tagResponse=await this.tagRepository.create({
                name,slug,status
            });
            
            await transaction.commit();
            return await this.findOne(tagResponse.id);
            
        }
        catch(err){
            await transaction.rollback();
            throw new Error(err.message);
        }
    }
    
    async update(id:number,updateTagInput: UpdateTagInput){
        const transaction=await this.sequelize.transaction();
        try{
            await this.tagRepository.update(updateTagInput,{where:{id}}) 
            await transaction.commit();
            return await this.findOne(id);
        }
        catch(err){
            await transaction.rollback();
            throw new Error(err.message);
        }
    }
    
    async delete(id:number){
        const transaction=await this.sequelize.transaction();
        
        try{
            const res=await this.tagRepository.destroy({where:{id}});
            transaction.commit();
            
            if(res===1){
                return {
                    success:true,
                    message:`Successfully deleted.`
                }
            }
            else{
                return {
                    success:false,
                    message:`Failed to delete data.`
                }
            }
        }
        catch(err){
            await transaction.rollback();
            throw new Error(err.message);
        }
    }
}


