import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchCard, UpdateCard } from '../card/modules';
import { CardRepository } from '../card/repositories/card.repository';
import { PaymentController } from './controllers/payment.controller';
import { checkBalance, CreatePayment, UpdatePayment } from './modules';
import { PaymentService } from './services/payment.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      CardRepository
    ]),
  ],
  controllers: [PaymentController],
  providers: [
    PaymentService,
    SearchCard,
    checkBalance,
    CreatePayment,
    UpdatePayment,
    UpdateCard
  ]
})
export class PaymentModule {}
