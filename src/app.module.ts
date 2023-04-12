import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { CategoryService } from './category/category.service';
import { CategoryResolver } from './category/category.resolver';
import { Category } from './category/category.entity';
import { TagModule } from './tag/tag.module';
import { Tag } from './tag/tag.entity';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: null,
      database: 'blog-app',
      autoLoadModels: true,
      synchronize: true,
      models:[
        Category,
        Tag
      ]
    }),
    CategoryModule,
    TagModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
