import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountRepository, UserRepository } from '../repositories/account.repository';
import { Accounts, User } from '../entities/account.entity';
import { AccountRegisterDto, AccountInfoResponse, AccountLoginDto } from '../dto/account.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AccountService {
    constructor (
        private accountRepository: AccountRepository,
        private userRepository: UserRepository,
    ){}
    async findOne( status: string, id?: number, account?:AccountLoginDto) {
        switch(status) {
            case "GetRequest":
                let user:User = await this.userRepository.findOne(id);
                if(user !== undefined) {
                    const {UserName, Password,...res} = user;
                    return res;
                } else {
                    throw new BadRequestException("NotFound")
                }
            case "CheckExisted": 
                let {Password, ...Info} = account;
                let AccountRes: Accounts = await this.accountRepository.findOne(Info);
                if(AccountRes !== undefined) {
                    return true
                }
                return false
            case "Login": 
                let AccountLogin: Accounts = await this.accountRepository.findOne(account);
                if(AccountLogin !== undefined) {
                    return true
                }
                return false

        default: 
                break;
        }
    }

    async createAccount(account: AccountRegisterDto) {
        let hashPassword = await bcrypt.hash(account.Password, 12);
        account.Password = hashPassword;
    }
    async findAll () {
        let accountInfoResponse: AccountInfoResponse;
        return this.userRepository.find(accountInfoResponse);
    }
}
