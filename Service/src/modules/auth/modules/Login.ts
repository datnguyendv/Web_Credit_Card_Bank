
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountLoginDto, fineOneDto } from 'src/modules/account/dto/account.dto';
import { Admin, User } from 'src/modules/account/entities/account.entity';
import { AccountService } from '../../account/services/account.service';
import { SignUser } from './SignUser';

@Injectable()
export class Login {
    constructor(
        private accountService: AccountService,
        private signUser: SignUser,
    ) {}

    async accountLogin(account: AccountLoginDto):Promise<any>{ 
        let Info: fineOneDto = { 
            status: "UserLogin",
            account: account
        }
        let res:User = await this.accountService.findOne(Info); 
        if(res !== undefined) {
            console.log("Login(): User");
            return this.signUser.signUser(res.AccountId,res.UserName, "User" );
        } else {
            let Info: fineOneDto = {
                status: "AdminLogin",
                account: account
            }
            let res:Admin = await this.accountService.findOne(Info); 
            if(res !== undefined) {
                console.log("Login(): Admin");
                return this.signUser.signUser(res.AccountId, res.UserName, "Admin");
            }else throw new UnauthorizedException("Credential Incorrect");
        }
        
        
    }
}