import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountLoginDto, AccountRegisterDto, fineOneDto } from '../account/dto/account.dto';
import { AccountService } from '../account/services/account.service';
import { SendMail } from './email/sendmail';
import { Login, SignUp } from './modules';


@Injectable()
export class AuthService {
    constructor(
        // private AccountRepository: AccountRepository,
        private accountService: AccountService,
        private loginAccount: Login,
        private signUp: SignUp,
        private sendMail: SendMail
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
        return this.signUp.accountRegister(account);
    }

    async accountLogin(account: AccountLoginDto):Promise<any>{
        return this.loginAccount.accountLogin(account);
    }

    async sendMailOtp(id:number):Promise<any> {
        this.sendMail.sendMailOtp(id);
    }
}

