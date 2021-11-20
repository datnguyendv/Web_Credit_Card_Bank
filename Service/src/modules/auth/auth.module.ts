import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { CreateAccount, FindOne } from '../account/modules';
import { AccountRepository, AdminRepository, UserRepository } from '../account/repositories/account.repository';
import { AccountService } from '../account/services/account.service';
import { CreateHistory } from '../loginHis/modules';
import { LoginHistoryRepository } from '../loginHis/repositories/loginHis.repository';
import { LoginHisStatusRepository } from '../loginHis/repositories/loginHisStatus.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Login, PasswordCompare, SignUp, SignUser } from './modules';
import { UserJwtStrategy } from './strategy/jwt.strategy';
dotenv.config();
const {JWT_SECRET} = process.env;

@Module({
  imports:[
  JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {expiresIn: '60s'}
    }),
    TypeOrmModule.forFeature([
      AccountRepository,
      UserRepository,
      AdminRepository,
      LoginHistoryRepository,
      LoginHisStatusRepository]),
  ],
controllers: [AuthController],
  providers: [
    AccountService,
    FindOne,
    CreateAccount,
    CreateHistory,
    AuthService,
    UserJwtStrategy, 
    Login,
    SignUp,
    SignUser,
    PasswordCompare]
})
export class AuthModule {}
