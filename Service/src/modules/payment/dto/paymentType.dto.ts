
import { IsNumber } from 'class-validator';
export enum paymentType {
    Free = 'Free',
    Internal= 'Internal',   
    External = 'External'
}

export enum paymentFee {
    Free = 0,
    Internal = 3000,
    External = 7000
}

export class internalPaymentDto {
    @IsNumber()
    CardIdSend: number
    @IsNumber()
    Balance: number
    @IsNumber()
    CardIdReceive: number
}

export class externalPayment {
    @IsNumber()
    CardIdSend: number
    @IsNumber()
    Balance: number

}