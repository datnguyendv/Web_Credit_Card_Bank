import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountLoginDto, AccountRegisterDto } from '../account/dto/account.dto';
import { AccountService } from '../account/services/account.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        // private AccountRepository: AccountRepository,
        private accountService: AccountService,
        
    ){}

    async checkAccountExisted(account: AccountLoginDto):Promise<any>{
        let res = await this.accountService.findOne("CheckExisted",0, account);
        if(res == false) {
            return true;
        }
        throw new BadRequestException("Account Existed");
    }

    async accountRegister(account: AccountRegisterDto):Promise<any>{
        let accountExisted = await this.accountService.findOne("", account.IdentifyCard);
        if(accountExisted) {
            throw new BadRequestException("Account Existed");
        } else { 
            this.accountService.createAccount(account)
        }
    }

    async accountLogin(account: AccountLoginDto):Promise<any>{
        let res = await this.accountService.findOne("Login",0, account);
        if(res) {
            return true;
        }
        throw new BadRequestException("Wrong Username or Password");
    }
}


