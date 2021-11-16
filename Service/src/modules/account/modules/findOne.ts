
import { Injectable, BadRequestException } from '@nestjs/common';
import { fineOneDto } from 'src/modules/account/dto/account.dto';
import { User, Admin } from '../entities/account.entity';
import { UserRepository, AdminRepository, AccountRepository } from '../repositories/account.repository';

@Injectable()
export class FindOne {
    constructor(
        private accountRepository: AccountRepository, 
        private userRepository: UserRepository,
        private adminRepository: AdminRepository, 
    ) {}

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
}