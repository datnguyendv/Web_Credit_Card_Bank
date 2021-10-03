import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cards } from './card.entity';

@Entity()
export class CardStatus {
    @PrimaryGeneratedColumn({type:'int', name:'StatusID'})
    StatusID: number;

    @Column({type:'string', name:'StatusName'})
    StatusName: string;

    @OneToMany (() => Cards, card => card.CardStatus)
    Card: Cards[];

}