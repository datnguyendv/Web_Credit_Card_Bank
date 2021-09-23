import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ValidationPipe } from './config/validation.pipe';
import { TypeOrmModule } from '@nestjs/typeorm';
import mySqlDbConfig from 'src/config/ormconfig'
@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(mySqlDbConfig)
  ],
  controllers: [AppController],
  providers: [{
    provide:APP_PIPE,
    useClass:ValidationPipe,
  },
  AppService],
  exports:[]
})
export class AppModule {}
