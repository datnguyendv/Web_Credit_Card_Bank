import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountLoginDto, AccountRegisterDto, fineOneDto } from '../account/dto/account.dto';
import { AccountService } from '../account/services/account.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        // private AccountRepository: AccountRepository,
        private accountService: AccountService,
        
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
        let Info: fineOneDto = {
            status: "Login",
            account: account
        }
        let res = await this.accountService.findOne(Info);
        if(res === undefined) {
            throw new UnauthorizedException("User does not existed");
        }
        return true;
    }
}


