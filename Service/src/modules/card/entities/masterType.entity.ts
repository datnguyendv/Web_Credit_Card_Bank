
import { ChildEntity, Column, JoinColumn, OneToOne } from 'typeorm';
import { cardType, LineOfCredit } from '../dto/cardType.dto';
import { Cards } from './card.entity';

@ChildEntity(cardType.Master)
export class NormalType extends Cards {

    @Column({type:'int', name:'LineOfCredit'})
    LineOfCredit: LineOfCredit.Master;

    @OneToOne(() =>Cards, card => card.CardID)
    @JoinColumn({name:'CardType'})
    Card:Cards;

}