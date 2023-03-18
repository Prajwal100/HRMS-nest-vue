import { Injectable } from '@nestjs/common';
import {Category} from '../../models/category';
@Injectable()
export class CategoryService {
    async findAll():Promise<Category[]>{
       return Category.findAll();
    }
    
    async findOne(id:number):Promise<Category>{
        return Category.findByPk(id);
    }
    
    async create(category:Category):Promise<Category>{
        return Category.create(category);
    }
    
    async                        update(id:number,category:Category):Promise<[number,Category[]]>{
        return Category.update(category,{where:{id}})
    }
    
    async delete(id:number):Promise<number>{
        return Category.destroy({where:{id}})
    }
}
