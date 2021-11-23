import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { AccountRegisterDto, findUserDto } from "src/modules/account/dto/account.dto";
import { User } from "src/modules/account/entities/account.entity";
import { AccountService } from "src/modules/account/services/account.service";
import { SignUser } from './sign-user';


@Injectable()
export class SignUp {
    constructor(
        private accountService: AccountService,
        private signUser: SignUser,
    ) {}

    async accountRegister(account: AccountRegisterDto):Promise<any>{
        let infoID: findUserDto = {
            IdentifyCard: account.IdentifyCard,
        } 
        //check customer existed 
        let UserExisted:User = await this.accountService.findUserByIdentifyCard(infoID);
        if(UserExisted !== undefined) {
            throw new UnauthorizedException("User existed");
        } else {
            //create account 
            try {
                let accountCreated:User = await this.accountService.createAccount(account);
                //return jwt with role = User because just for user register account
                return this.signUser.signUser(accountCreated.AccountId, accountCreated.UserName, "User");
            } catch (error) {
                throw new BadRequestException('please register again');
            }
            
        }
    }
}
