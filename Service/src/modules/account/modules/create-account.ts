import { Injectable } from "@nestjs/common";
import { AccountRegisterDto } from '../dto/account.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateAccount {
    constructor(
        
    ) {}
    async createAccount(account: AccountRegisterDto) { 
        let hashPassword = await bcrypt.hash(account.Password, 12);
        account.Password = hashPassword;
    }

}