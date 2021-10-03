import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, TableInheritance } from "typeorm";
import { User } from 'src/modules/account/entities/user.entity';
import { Payments } from "src/modules/payment/entities/payment.entity";
import { cardType } from "../dto/cardType.dto";
import { CardType } from "./cardType.entity";
import { CardStatus } from './cardStatus.entity';

@Entity('Cards')
export class Cards {

    @PrimaryColumn({type:'int', name:'CardID'})
    CardID: number;

    @Column({type:'int', name: 'CVV'})
    CVV:number;

    @Column({type: 'varchar', name: 'Status'})
    Status: string;

    @Column({type:"datetime", name:'DateOfExpired'})
    DateOfExpired: string;

    @ManyToOne(() => User, user => user.Card)
    Account: User;

    @OneToMany(() => Payments, payment => payment.Card)
    Payment: Payments[];

    @ManyToOne(() => CardType, cardType => cardType.Card)
    CardType: CardType

    @ManyToOne(() => CardStatus, status => status.Card)
    CardStatus:CardStatus;
}