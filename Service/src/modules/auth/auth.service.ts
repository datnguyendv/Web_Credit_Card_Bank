import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountLoginDto, AccountRegisterDto, fineOneDto } from '../account/dto/account.dto';
import { User } from '../account/entities/account.entity';
import { FindOne } from '../account/modules';
import { AccountService } from '../account/services/account.service';
import { SendMail } from './email/sendmail';
import { Login, SignUp } from './modules';
import { findUserDto } from 'src/modules/account/dto/account.dto';


@Injectable()
export class AuthService {
    constructor(
        // private AccountRepository: AccountRepository,
        private accountService: AccountService,
        private loginAccount: Login,
        private signUp: SignUp,
        private sendMail: SendMail,
        private findAccount: FindOne
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

    generateNumber(range: number) {
        let randomNumber = Math.floor(Math.random() * (Math.pow(10,range)- Math.pow(10, range-1))) + Math.pow(10,range-1);
        return randomNumber
    }

    async sendMailOtp(id:number):Promise<any> {
        let infoToFindEmail: findUserDto = {
            IdentifyCard: id
        }
        let generateOtp: number = this.generateNumber(6);
        console.log(generateOtp);
        let account: User = await this.findAccount.findUserByIdentifyCard(infoToFindEmail);
        if(account !== undefined) {
            let email: string = account.Email;
            return await this.sendMail.sendMailOtp(email, generateOtp);
        } else throw new BadRequestException('can not find account')
    }
}

