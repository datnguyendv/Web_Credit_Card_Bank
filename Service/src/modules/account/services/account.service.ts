import { Injectable } from '@nestjs/common';
import { AccountRegisterDto, findUserDto, fineOneDto } from '../dto/account.dto';
import { User } from '../entities/account.entity';
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
    async createAccount(account: AccountRegisterDto): Promise<any> {
        return this.createNewAccount.createAccount(account);
    }

    async findAll () {
        return this.userRepository.find();
    }

    async findUserByIdentifyCard(Info: findUserDto): Promise<any> {
        return this.findOneModule.findUserByIdentifyCard(Info);
    }

    async saveAccount(account: AccountRegisterDto): Promise<any> {
        this.userRepository.save(account);
        return true;
    }
}
