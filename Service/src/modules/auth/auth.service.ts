import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountLoginDto, AccountRegisterDto, fineOneDto } from '../account/dto/account.dto';
import { Admin, User } from '../account/entities/account.entity';
import { AccountService } from '../account/services/account.service';

@Injectable()
export class AuthService {
    constructor(
        // private AccountRepository: AccountRepository,
        private accountService: AccountService,
        private jwtService: JwtService,
    ){}

    async checkAccountExisted(account: AccountLoginDto):Promise<any>{
        let Info: fineOneDto = {
            status: "CheckExisted",
            account: account
        }
        let res = await this.accountService.findOne(Info);
        console.log(res);
        
        if(res) {
            throw new UnauthorizedException("Account Existed");
        }
        return true;
    }

    async accountRegister(account: AccountRegisterDto):Promise<any>{
        
    }

    async accountLogin(account: AccountLoginDto):Promise<any>{
        let Info: fineOneDto = {
            status: "UserLogin",
            account: account
        }
        let res:User = await this.accountService.findOne(Info);
        if(res !== undefined) {
            console.log("User");
            return this.signUser(res.AccountId,res.UserName, "User" );
        } else {
            let Info: fineOneDto = {
                status: "AdminLogin",
                account: account
            }
            let res:Admin = await this.accountService.findOne(Info);
            if(res !== undefined) {
                console.log("Admin");
                return this.signUser(res.AccountId, res.UserName, "Admin");
            }else throw new UnauthorizedException("Credential Incorrect");
        }
        
        
    }
    // function to return jwt string 
    async signUser(userId:number, userName: string, role: string): Promise<any>{ 
        return this.jwtService.sign({
            sub: userId,
            userName,
            type: role
        })
    }
}

