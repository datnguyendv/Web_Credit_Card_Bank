
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountLoginDto, fineOneDto } from 'src/modules/account/dto/account.dto';
import { Admin, User } from 'src/modules/account/entities/account.entity';
import { SignUser } from './sign-user';
import { AccountService } from '../../account/services/account.service';
import { PasswordCompare } from './compare-password';

@Injectable()
export class Login {
    constructor(
        private accountService: AccountService,
        private signUser: SignUser,
        private comparePassword: PasswordCompare
    ) {}

    setInfoLogin(status: string, account:AccountLoginDto):fineOneDto{
        let Info: fineOneDto = {
            status: status,
            account: account
        }
        return Info
    }

    async processResponseLogin(res: User|Admin , password: string, type: string) {
        let match = await this.comparePassword.passCompare(password, res.Password);
        if(match) {
            console.log(`Login(): ${type}`);
            return this.signUser.signUser(res.AccountId,res.UserName, type );
        } else throw new UnauthorizedException("Credential Incorrect");
        
    }

    async accountLogin(account: AccountLoginDto):Promise<any>{ 
        let Info = this.setInfoLogin("UserLogin",account)
        let res:User = await this.accountService.findOne(Info); 
        if(res !== undefined) {
            return this.processResponseLogin(res,account.Password, "User")
        } else {
            let Info = this.setInfoLogin("AdminLogin",account)
            let res:Admin = await this.accountService.findOne(Info); 
            if(res !== undefined) {
                return this.processResponseLogin(res,account.Password, "Admin")
            }else throw new UnauthorizedException("Credential Incorrect");
        }
    }
}