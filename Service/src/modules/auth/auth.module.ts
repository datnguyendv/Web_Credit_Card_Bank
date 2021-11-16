import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepository, AdminRepository, UserRepository } from '../account/repositories/account.repository';
import { AccountService } from '../account/services/account.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Login } from './modules/Login';
import { SignUser } from './modules/SignUser';
import { UserJwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports:[
  JwtModule.register({
      secret: "hcmiusebanking",
      signOptions: {expiresIn: '60s'}
    }),
    TypeOrmModule.forFeature([
      AccountRepository,
      UserRepository,
      AdminRepository]),
    AccountRepository
  ],
controllers: [AuthController],
  providers: [
    AuthService,
    AccountService,
    UserJwtStrategy, 
    Login,
    SignUser]
})
export class AuthModule {}
