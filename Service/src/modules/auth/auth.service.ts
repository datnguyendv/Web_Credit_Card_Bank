import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountLoginDto, AccountRegisterDto, fineOneDto } from '../account/dto/account.dto';
import { Admin, User } from '../account/entities/account.entity';
import { AccountService } from '../account/services/account.service';
import { Login } from './modules/Login';

@Injectable()
export class AuthService {
    constructor(
        // private AccountRepository: AccountRepository,
        private accountService: AccountService,
        private jwtService: JwtService,
        private loginAccount: Login,
    ){}

    async checkAccountExisted(account: AccountLoginDto):Promise<any>{
        let Info: fineOneDto = {
            status: "CheckExisted",
            account: account
        }
        let res = await this.accountService.findOne(Info);
        console.log(res);
        
        if(res) {
            throw new UnauthorizedException("Account Existed");
        }
        return true;
    }

    async accountRegister(account: AccountRegisterDto):Promise<any>{
        
    }

    async accountLogin(account: AccountLoginDto):Promise<any>{
        return this.loginAccount.accountLogin(account)
    }
}

