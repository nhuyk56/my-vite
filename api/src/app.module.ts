import { forwardRef, Module } from '@nestjs/common';
import { TodoModule } from './module/todo/todo.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from './database.module'
import { Todo } from './module/todo/todo.entity'
import { XeDap } from './module/xedap/xedap.module';
import { XeMay } from './module/xemay/xemay.module';
import { XeOTo } from './module/xeoto/xeoto.module';

const defaultOptions = {
  type: 'postgres',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  synchronize: true,
  host: 'user_db_host',
  autoLoadEntities: true
};

@Module({
  imports: [
    TodoModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number().default(3000)
      })
    }),
    DatabaseModule,
    forwardRef(() => XeDap),
    forwardRef(() => XeMay),
    forwardRef(() => XeOTo)
  ],
})

export class AppModule {}
