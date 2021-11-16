import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AccountRegisterDto, findUserDto } from "src/modules/account/dto/account.dto";
import { CreateAccount, FindOne } from "src/modules/account/modules";
import { AccountService } from "src/modules/account/services/account.service";


@Injectable()
export class SignUp {
    constructor(
        private createAccount: CreateAccount,
        private accountService: AccountService,
        private checkUserService: FindOne
    ) {}
    async accountRegister(account: AccountRegisterDto):Promise<any>{
        let infoID: findUserDto = account;
        //check customer existed 
        let UserExisted = await this.accountService.findUserByIdentifyCard(infoID);
        if(UserExisted !== undefined) {
            throw new UnauthorizedException("User existed")
        } else {
            //create account 
            let accountCreated = await this.createAccount.createAccount(account);
            //save account 
            await this.accountService.saveAccount(accountCreated);
            
            // create card    
        }
    }
}