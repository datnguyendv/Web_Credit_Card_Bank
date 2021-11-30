import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcryptjs';
import { AccountRegisterDto, updatePassword } from '../dto/account.dto';
import { UserRepository } from "../repositories/account.repository";

@Injectable()
export class ManageAccount {
    constructor(
        private userRepository: UserRepository    
    ) {}

    async saveAccount(account: AccountRegisterDto): Promise<any> {
        let result = await this.userRepository.save(account);
        console.log(result);
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

    async updateAccountPass(params: updatePassword):Promise<boolean> {
        let salt = await bcrypt.genSalt(10)
        let hashPassword = await bcrypt.hash(params.Password, salt);
        console.log(params);
        let result = await this.userRepository.update(params.ID, {Password: hashPassword});
        console.log(result);
        return true;
    }

}