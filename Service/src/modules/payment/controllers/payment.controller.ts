import { Body, Controller, Post } from '@nestjs/common';
import { externalPaymentDto, internalPaymentDto } from '../dto/paymentType.dto';
import { PaymentService } from '../services/payment.service';

@Controller('payment')
export class PaymentController {
    constructor(
        private paymentService: PaymentService
    ) {}

    @Post('internal')
    async internalTransfer(@Body() paymentData: internalPaymentDto) {
        return this.paymentService.internalTransfer(paymentData);
    }

    @Post('external')
    async externalTransfer(@Body() paymentData: externalPaymentDto) {
        return this.paymentService.externalTransfer(paymentData)
    }
}
