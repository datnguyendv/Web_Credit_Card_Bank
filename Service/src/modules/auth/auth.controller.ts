import { BadRequestException, Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AccountLoginDto, AccountRegisterDto } from '../account/dto/account.dto';
import { AuthService } from './auth.service';


@Controller('/')
@UsePipes(new ValidationPipe())
export class AuthController {
    constructor (
        private AuthService:AuthService
    ) {}

    @Post() 
    async checkExistedAccount(@Body() accountCheck: AccountLoginDto) {
        return this.AuthService.checkAccountExisted(accountCheck);
    }

    @Post('register')
    async register(@Body() accountRegister: AccountRegisterDto):Promise<any> {
        return this.AuthService.accountRegister(accountRegister);
    }  

    @Post('login')
    async login(@Body() accountLogin: AccountLoginDto ) {
        return this.AuthService.accountLogin(accountLogin)
    }
}
