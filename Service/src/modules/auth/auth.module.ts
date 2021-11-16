import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccountService } from '../account/services/account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accounts } from '../account/entities/account.entity';
import { AccountRepository, AdminRepository, UserRepository } from '../account/repositories/account.repository';
import { JwtModule } from '@nestjs/jwt';
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
  UserJwtStrategy]
})
export class AuthModule {}
