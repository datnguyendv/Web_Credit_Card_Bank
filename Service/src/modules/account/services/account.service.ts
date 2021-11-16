import { Injectable } from '@nestjs/common';
import { AccountRegisterDto, fineOneDto } from '../dto/account.dto';
import { CreateAccount, FindOne } from '../modules';
import { UserRepository } from '../repositories/account.repository';

@Injectable()
export class AccountService {
    constructor (
        private userRepository: UserRepository, 
        private findOneModule: FindOne,
        private createNewAccount: CreateAccount
    ){}
    async findOne(Info: fineOneDto):Promise<any> {
        return this.findOneModule.findOne(Info);
    }
    // add account into database
    async createAccount(account: AccountRegisterDto) {
        return this.createNewAccount.createAccount(account);
    }
    async findAll () {
        return this.userRepository.find();
    }
}
