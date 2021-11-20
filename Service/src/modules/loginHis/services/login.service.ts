import { Injectable } from '@nestjs/common';
import { AccountLoginDto } from 'src/modules/account/dto/account.dto';
import { CreateHistory } from '../modules/createLoginHis';

@Injectable()
export class LoginService {
    constructor(
        private createHistory: CreateHistory
    ) {}

    async saveLoginHis(account: AccountLoginDto, status: string): Promise<any> {
        // return this.createHistory.generateHistory(account, status);
    }
}
