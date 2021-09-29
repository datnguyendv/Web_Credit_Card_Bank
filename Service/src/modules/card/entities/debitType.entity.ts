
import { ChildEntity, Column, JoinColumn, OneToOne } from 'typeorm';
import { cardType, LineOfCredit } from '../dto/cardType.dto';
import { Cards } from './card.entity';

@ChildEntity(cardType.Debit)
export class NormalType extends Cards {

    @Column({type:'int', name:'LineOfCredit'})
    LineOfCredit: LineOfCredit.Debit;

    @OneToOne(() =>Cards, card => card.CardID)
    @JoinColumn({name:'CardType'})
    Card:Cards;

}