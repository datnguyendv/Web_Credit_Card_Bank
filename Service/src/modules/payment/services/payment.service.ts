import { BadRequestException, Injectable } from '@nestjs/common';
import { Cards } from 'src/modules/card/entities/card.entity';
import { SearchCard } from 'src/modules/card/modules';
import { cardUpdateDto, externalPaymentDto, internalPaymentDto } from '../dto/paymentType.dto';
import { checkBalance, UpdatePayment } from '../modules';

@Injectable()
export class PaymentService {
    constructor(
        private searchCard: SearchCard,
        private checkBalance: checkBalance,
        private updatePayment: UpdatePayment
    ){}

    async internalTransfer(paymentData: internalPaymentDto, type:string) {
        if(paymentData.CardIdReceive == paymentData.CardIdSend) {
            throw new BadRequestException("can not transfer");
        }
        //find card receive
        let cardReceive: Cards = await this.searchCard.searchCardByCardId(paymentData.CardIdReceive);
        let cardTransfer:Cards = await this.searchCard.searchCardByCardId(paymentData.CardIdSend);
        if(cardReceive == undefined || cardTransfer == undefined || cardReceive.CardStatus.StatusName !== "open" || cardTransfer.CardStatus.StatusName !== "open") {
            throw new BadRequestException("card does not existed");
        }
        //check balance available
        let checkBalance: boolean = await this.checkBalance.checkBalanceAvailable(cardTransfer.CurrentBalance, paymentData.Balance)
        if(!checkBalance) {
            throw new BadRequestException('false to transfer')
        } else {
            // update account payment 
            let cardSend: cardUpdateDto = {
                CardId: paymentData.CardIdSend,
                Balance: paymentData.Balance,
                CurrentBalance: cardTransfer.CurrentBalance,
                type: type
            }
            console.log(typeof(cardSend.CurrentBalance));
            
            let cardTransferUpdate: boolean = await this.updatePayment.updateAccountTransfer(cardTransfer.CardID, cardTransfer.CurrentBalance, paymentData.Balance, "Internal");
            let cardReceiveUpdate: boolean = await this.updatePayment.updateAccountReceive(cardReceive.CardID,cardReceive.CurrentBalance, paymentData.Balance);
            if(cardTransferUpdate !== true || cardReceiveUpdate !== true) {
                throw new BadRequestException('false to transfer')
            }
            // create payment history
            // 1. payment for account transfer 
            // 2. payment for account receive
            // 3.save payment history
        }
        
    }

    async externalTransfer(paymentData: externalPaymentDto, type: string) {
        
    }
}
