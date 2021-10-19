import { Controller, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { AccountRegisterDto, fineOneDto } from '../dto/account.dto';
import { AccountService } from '../services/account.service';

@Controller('account')
@UsePipes(new ValidationPipe())
export class AccountController {
    constructor(
        private accountService: AccountService,

    ) {}

    @Get()
    async findAll(): Promise<any> {
        return this.accountService.findAll();
    }

    @Get(':id')
    async fineOne( @Param('id') id:number):Promise<any> {
        let Info:fineOneDto;
        Info.status = "GetRequest";
        Info.id = id;
        return this.accountService.findOne(Info);
    }

}
