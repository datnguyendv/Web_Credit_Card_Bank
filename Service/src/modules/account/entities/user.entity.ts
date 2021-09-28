import { ChildEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { role } from "../dto/accountRole.dto";
import { Accounts } from "./account.entity";

@ChildEntity(role.User)
export class User extends Accounts {
    @Column({type:'varchar', name: 'Address'})
    Address: string;

    @Column({type:'varchar', name:'Email'})
    Email:string;

    @Column({type:'date', name:'DateOfBirth'}) // format of mysql: yyyy-mm-dd
    DateOfBirth: string;

    @Column({type:'int', name: 'PhoneNumber'})
    PhoneNumber: number;
    
    @OneToOne(() => Accounts)
    @JoinColumn({name: 'AccountId'})
    account : Accounts
}