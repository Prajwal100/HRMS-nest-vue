import { UpdateCategoryInput } from './dto/update-category.input';
import { InjectModel } from '@nestjs/sequelize';
import { Inject,Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { Sequelize } from 'sequelize';
@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
    @Inject('SEQUELIZE')
    private readonly sequelize:Sequelize
  ) {}
  async findAll(): Promise<Category[]> {
    return this.categoryModel.findAll();
  }

  async findOne(id: number): Promise<Category> {
    return this.categoryModel.findByPk(id);
  }

  async create(category: any) {
    const transaction=await this.sequelize.transaction();
    try{
      const res=await this.categoryModel.create(category);
      await transaction.commit();
      
      return res;
    }
    catch(err){
      await transaction.rollback();
      throw new Error("Something went wrong.")
    }
  }

  async update(
    id: number,
    updateCategoryInput: UpdateCategoryInput,
  ){
    
    const transaction=await this.sequelize.transaction();
    try{
    this.categoryModel.update(updateCategoryInput, { where: { id } });
    
    await transaction.commit();
    
    return await this.findOne(id)
      
    }
    catch(err){
      await transaction.rollback();
      throw new Error("Something went wrong.");
    }
  }

  async delete(id: number){
    const transaction=await this.sequelize.transaction();
    try{
      const res= await this.categoryModel.destroy({ where: { id } });
      transaction.commit();
      if(res===1){
        return {
          success:true,
          message:"Category deleted successfully."
        }
      }
      else{
        return {
          success:false,
          message:"Category not found."
        }
      }
    }
    catch(err){
      transaction.rollback();
    }
  }
}
