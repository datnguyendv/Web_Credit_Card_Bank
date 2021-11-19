import { Injectable } from "@nestjs/common";


@Injectable()
export class checkBalance {
    constructor() {}

    async checkBalanceAvailable(currentBalance:number, amountTranfer: number): Promise<boolean> {
        if (currentBalance <= amountTranfer + 100000) {
            return false
        } 
        return true
    }
}