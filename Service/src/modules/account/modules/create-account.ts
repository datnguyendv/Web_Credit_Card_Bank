import { Injectable } from "@nestjs/common";
import { AccountRegisterDto } from '../dto/account.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateAccount {
    constructor(
        
    ) {}
    async createAccount(account: AccountRegisterDto):Promise<any> { 
        let salt = await bcrypt.genSalt(10)
        let hashPassword = await bcrypt.hash(account.Password, salt);
        account.Password = hashPassword;
        console.log("createAccount(): ", account);
        
        return account;
    }

}