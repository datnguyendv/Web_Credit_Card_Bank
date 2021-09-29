import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, TableInheritance } from "typeorm";
import { User } from 'src/modules/account/entities/user.entity';
import { Payments } from "src/modules/payment/entities/payment.entity";
import { cardType } from "../dto/cardType.dto";

@Entity('Cards')
@TableInheritance({
    column: {type:'enum', name:'CardType', enum:cardType, nullable: false}
})
export class Cards {

    @PrimaryColumn({type:'int', name:'CardID'})
    CardID: number;

    @Column({type:'int', name: 'CVV'})
    CVV:number;

    @Column({type: 'varchar', name: 'Status'})
    Status: string;

    @Column({type:"datetime", name:'DateOfExpired'})
    DateOfExpired: string;

    @ManyToOne(() => User, user => user.AccountID)
    AccountID: User;

    @OneToMany(() => Payments, payment => payment.CardID)
    Payment: Payments[]
}