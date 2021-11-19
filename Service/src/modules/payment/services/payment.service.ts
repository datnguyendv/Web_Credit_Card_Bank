import { Injectable } from '@nestjs/common';
import { externalPaymentDto, internalPaymentDto } from '../dto/paymentType.dto';

@Injectable()
export class PaymentService {
    constructor(){}

    async internalTransfer(paymentData: internalPaymentDto) {
        //tim account receive
        // update account payment 
        //save payment history
    }

    async externalTransfer(paymentData: externalPaymentDto) {
        
    }
}
