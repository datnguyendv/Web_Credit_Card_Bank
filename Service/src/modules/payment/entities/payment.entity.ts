import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { Cards } from '../../card/entities/card.entity';
import { paymentType } from "../dto/paymentType.dto";
import { PaymentType } from "./paymentType.entity";
import { User } from 'src/modules/account/entities/account.entity';
import { PaymentStatus } from './paymentStatus.entity';

@Entity('Payments')
export class Payments {

    @PrimaryGeneratedColumn({type:'int', name:'PaymentId'}) 
    PaymentID: number;

    @Column({type: 'int', name:'Amount'})
    Amount: number;

    @Column({type:'varchar', name:'Location'})
    Location: string;

    @Column({type:'time', name: 'Time'})
    Time: string;

    @Column({type:'date', name:'Date'})
    Date:string;

    @ManyToOne(() => User, user => user.Payment)
    User:User;

    @ManyToOne(() => PaymentType, paymentType => paymentType.Payment)
    PaymentType: PaymentType;

    @ManyToOne(() => PaymentStatus, PaymentStatus => PaymentStatus.Payment)
    PaymentStatus: PaymentStatus;
}
