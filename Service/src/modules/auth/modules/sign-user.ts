import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class SignUser {
    constructor(
        private jwtService: JwtService,
    ) {}

    async signUser(userId:number, userName: string, role: string): Promise<any>{ 
        return this.jwtService.sign({
            sub: userId,
            userName,
            type: role
        })
    }
}