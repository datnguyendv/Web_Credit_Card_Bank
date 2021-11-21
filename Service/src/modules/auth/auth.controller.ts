import { BadRequestException, Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AccountLoginDto, AccountRegisterDto } from '../account/dto/account.dto';
import { AuthService } from './auth.service';


@Controller('/')
@UsePipes(new ValidationPipe())
export class AuthController {
    constructor (
        private AuthService:AuthService
    ) {}

    @Post() // test fucntion check account existed when register for the first time
    async checkExistedAccount(@Body() accountCheck: AccountLoginDto) {
        return this.AuthService.checkAccountExisted(accountCheck);
    }

    @Post('register')
    async register(@Body() accountRegister: AccountRegisterDto):Promise<any> {
        return this.AuthService.accountRegister(accountRegister);
    }  
    // @UseGuards(AuthGuard('jwt'))
    @Post('login') 
    async login(@Body() accountLogin: AccountLoginDto ) {
        return this.AuthService.accountLogin(accountLogin)
    }

    @Get('sendmail/:id')
    async getMail(@Param('id') id:number): Promise<any> {
        return this.AuthService.sendMailOtp(id);
    }
}
