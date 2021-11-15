import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountRepository, UserRepository, AdminRepository } from '../repositories/account.repository';
import { Accounts, Admin, User } from '../entities/account.entity';
import { AccountRegisterDto, AccountInfoResponse, AccountLoginDto, fineOneDto } from '../dto/account.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AccountService {
    constructor (
        private accountRepository: AccountRepository,
        private userRepository: UserRepository,
        private adminRepository: AdminRepository,
    ){}
    async findOne(Info: fineOneDto):Promise<any> {
        switch(Info.status) {
            case "GetAccount":
                let user:User = await this.userRepository.findOne(Info.id);
                if(user !== undefined) {
                    const {Password,...res} = user; // remove username and password from response
                    return res; // because want to know the information of response
                } else {
                    throw new BadRequestException("NotFound")
                }
            case "CheckExisted": 
                let {Password, ...InfoToFind} = Info.account; // because just using object username in Info account;
                let AccountRes = await this.accountRepository.findOne(InfoToFind);
                console.log(AccountRes);
                if(AccountRes !== undefined) {

                    return true //just need to know account existed or not 
                }
                return false
            case "UserLogin": 
                let userRes:User = await this.userRepository.findOne(Info.account);
                return userRes;
            case "AdminLogin": 
                let adminRes:Admin = await this.adminRepository.findOne(Info.account);
                return adminRes;

        default: 
                break;
        }
    }
    // add account into database
    async createAccount(account: AccountRegisterDto) {
        let hashPassword = await bcrypt.hash(account.Password, 12);
        account.Password = hashPassword;
    }
    async findAll () {
        return this.userRepository.find();
    }
}
