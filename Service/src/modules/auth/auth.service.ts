import { BadRequestException, Injectable } from '@nestjs/common';
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
        if(res == false) {
            return true;
        }
        throw new BadRequestException("Account Existed");
    }

    async accountRegister(account: AccountRegisterDto):Promise<any>{
        let Info: fineOneDto = {
            status: "CheckExisted",
            id: account.IdentifyCard
        }
        let accountExisted = await this.accountService.findOne(Info);
        if(accountExisted) {
            throw new BadRequestException("Account Existed");
        } else { 
            this.accountService.createAccount(account)
        }
    }

    async accountLogin(account: AccountLoginDto):Promise<any>{
        let Info: fineOneDto = {
            status: "Login",
            account: account
        }
        let res = await this.accountService.findOne(Info);
        if(res === undefined) {
            throw new BadRequestException("Wrong Username or Password");
        }
        return true;
    }
}


