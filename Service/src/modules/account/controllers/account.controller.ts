import { Controller, Get, Param, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AccountRegisterDto, fineOneDto } from '../dto/account.dto';
import { AccountService } from '../services/account.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('account')
@UsePipes(new ValidationPipe())
export class AccountController {
    constructor(
        private accountService: AccountService,

    ) {}
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(): Promise<any> {
        return this.accountService.findAll();
    }

    @Get(':id')
    async fineOne( @Param('id') id:number):Promise<any> {
        let Info:fineOneDto = {
            id : id,
            status : "GetAccount"
        }
        return this.accountService.findOne(Info);
    }

}
