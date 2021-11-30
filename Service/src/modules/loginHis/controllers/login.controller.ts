import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginService } from '../services/login.service';

@Controller('loginHis')
@UsePipes(new ValidationPipe())
export class LoginController {
    constructor(
        private loginService: LoginService,
    ){}

    @Get()
    async getAllLoginHis(): Promise<any> {
        return this.loginService.getAllLoginHis();
    }
}
