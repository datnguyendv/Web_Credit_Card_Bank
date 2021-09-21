import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
    @Get()
    getUser():string {
        return "hello"
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return "check body by using dto"
    }

}
