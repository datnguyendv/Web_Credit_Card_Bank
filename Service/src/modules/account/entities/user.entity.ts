import { ChildEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { role } from "../dto/accountRole.dto";
import { Accounts } from "./account.entity";
import { LoginHistory } from '../../login/entities/loginHis.entity';
import { Cards } from '../../card/entities/card.entity';
import { Payments } from 'src/modules/payment/entities/payment.entity';

@ChildEntity(role.User)
export class User extends Accounts{
    @Column({type:'varchar', name: 'Address'})
    Address: string;

    @Column({type:'varchar', name:'Email'})
    Email:string;

    @Column({type:'date', name:'DateOfBirth'}) // format of mysql: yyyy-mm-dd
    DateOfBirth: string;

    @Column({type:'int', name: 'PhoneNumber'})
    PhoneNumber: number;

    @OneToMany(() => Cards, card => card.Account)
    Card: Cards[];

    @OneToMany(() => Payments, payment => payment.User)
    Payment:Payments[];
}