
import { ChildEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { cardType, LineOfCredit } from '../dto/cardType.dto';
import { Cards } from './card.entity';

@Entity() 
export class CardType {
    @PrimaryGeneratedColumn({type:'int', name:'CardTypeId'})
    CardTypeId: number;

    @Column({type:'string', name: 'TypeName'})
    TypeName:string;

    @Column({type:'int', name:'LineOfDebit'})
    LineOfDebit: number;

    @OneToMany(() => Cards, card => card.CardType)
    Card: Cards[];
}