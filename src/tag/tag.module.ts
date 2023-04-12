import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagResolver } from './tag.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tag } from './tag.entity';
import { Sequelize } from 'sequelize-typescript';

@Module({
    imports:[SequelizeModule.forFeature([Tag])],
    providers: [TagService, TagResolver,{
        provide:'SEQUELIZE',useExisting:Sequelize
    }],
    exports: [SequelizeModule]
})
export class TagModule {}
