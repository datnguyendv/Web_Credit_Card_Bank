import { Injectable } from "@nestjs/common";
import { AccountRegisterDto } from "src/modules/account/dto/account.dto";

@Injectable()
export class SignUp {
    constructor(

    ) {}
    async accountRegister(account: AccountRegisterDto):Promise<any>{
           //check account existed or not  (done)
                // if not exitsted => create new account
    }
}