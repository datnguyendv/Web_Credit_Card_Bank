import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchCard, UpdateCard } from '../card/modules';
import { CardRepository } from '../card/repositories/card.repository';
import { PaymentController } from './controllers/payment.controller';
import { checkBalance, CreatePayment, SearchPaymentStatus, SearchPaymentType, UpdatePayment } from './modules';
import { PaymentRepository } from './repositories/payment.repository';
import { PaymentStatusRepository } from './repositories/paymentStatus.repository';
import { PaymentTypeRepository } from './repositories/paymentType.repository';
import { PaymentService } from './services/payment.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      CardRepository,
      PaymentRepository,
      PaymentStatusRepository,
      PaymentTypeRepository
    ]),
  ],
  controllers: [PaymentController],
  providers: [
    PaymentService,
    SearchPaymentStatus,
    SearchPaymentType,
    SearchCard,
    checkBalance,
    CreatePayment,
    UpdatePayment,
    UpdateCard
  ]
})
export class PaymentModule {}
