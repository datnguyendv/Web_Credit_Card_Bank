import { Injectable } from "@nestjs/common";
import { AccountRegisterDto } from '../dto/account.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from "../repositories/account.repository";

@Injectable()
export class CreateAccount {
    constructor(
        private userRepository: UserRepository    
    ) {}

    async saveAccount(account: AccountRegisterDto): Promise<any> {
        this.userRepository.save(account);
        return true;
    }

    async createAccount(account: AccountRegisterDto):Promise<any> { 
        let salt = await bcrypt.genSalt(10)
        let hashPassword = await bcrypt.hash(account.Password, salt);
        account.Password = hashPassword;
        console.log("createAccount(): ", account);
        await this.saveAccount(account)
        return account;
    }

}