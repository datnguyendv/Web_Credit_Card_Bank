import { Body, Controller, Post } from '@nestjs/common';
import { externalPayment, internalPaymentDto } from '../dto/paymentType.dto';

@Controller('payment')
export class PaymentController {
    constructor() {}

    @Post('internal')
    async internalTransfer(@Body() paymentData: internalPaymentDto) {

    }

    @Post('external')
    async externalTransfer(@Body() paymentData: externalPayment) {
        
    }
}
