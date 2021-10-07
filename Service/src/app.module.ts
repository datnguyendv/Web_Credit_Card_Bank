import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from '../ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './modules/account/account.module';
import { LoginModule } from './modules/auth/login.module';


@Module({
  imports: [
TypeOrmModule.forRoot(typeOrmConfig),
  AccountModule,
  LoginModule
  ],
  controllers: [AppController],
  providers: [ AppService ],
  exports:[]
})
export class AppModule {}
