import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountRepository, UserRepository } from '../repositories/account.repository';
import { Accounts, User } from '../entities/account.entity';
import { AccountRegisterDto, AccountInfoResponse, AccountLoginDto, fineOneDto } from '../dto/account.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AccountService {
    constructor (
        private accountRepository: AccountRepository,
        private userRepository: UserRepository,
    ){}
    async findOne(Info: fineOneDto) {
        console.log(Info);
        switch(Info.status) {
            case "GetAccount":
                let user:User = await this.userRepository.findOne(Info.id);
                if(user !== undefined) {
                    const {UserName, Password,...res} = user; // remove username and password from response
                    return res; // because want to know the information of response
                } else {
                    throw new BadRequestException("NotFound")
                }
            case "CheckExisted": 
                let {Password, ...InfotoFind} = Info.account; // because just using object username in Info account;
                let AccountRes = await this.accountRepository.findOne(InfotoFind);
                console.log(AccountRes);
                if(AccountRes !== undefined) {

                    return true //just need to know account existed or not 
                }
                return false
            case "Login": 
                return this.accountRepository.findOne(Info.account);

        default: 
                break;
        }
    }

    async createAccount(account: AccountRegisterDto) {
        let hashPassword = await bcrypt.hash(account.Password, 12);
        account.Password = hashPassword;
    }
    async findAll () {
        return this.userRepository.find();
    }
}
