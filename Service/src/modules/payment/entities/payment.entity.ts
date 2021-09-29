import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cards } from '../../card/entities/card.entity';

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

    @ManyToOne(() => Cards, card => card.CardID)
    CardID: Cards;

}
