import { User } from 'src/modules/account/entities/account.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { CardStatus } from './cardStatus.entity';
import { CardType } from "./cardType.entity";

@Entity('Cards')
export class Cards {

    @PrimaryColumn({type:'int', name:'CardID'})
    CardID: number;

    @Column({type:'int', name: 'CurrentBalance'})
    CurrentBalance: number;

    @Column({type:'int', name: 'CVV'})
    CVV:number;

    @Column({type:"datetime", name:'DateOfExpired'})
    DateOfExpired: string;

    @ManyToOne(() => User, user => user.Card)
    Account: User;

    @ManyToOne(() => CardType, cardType => cardType.Card)
    CardType: CardType

    @ManyToOne(() => CardStatus, status => status.Card)
    CardStatus:CardStatus;
}