
import { Payments } from 'src/modules/payment/entities/payment.entity';
import { ChildEntity, Column, Entity, OneToMany, PrimaryColumn, TableInheritance } from 'typeorm';
import { Cards } from '../../card/entities/card.entity';
import { LoginHistory } from '../../login/entities/loginHis.entity';
import { role } from '../dto/accountRole.dto';

@Entity('Accounts')
@TableInheritance({
    column: {type:'enum', enum: role, name: 'Role', nullable:false}
})
export class Accounts {
    @PrimaryColumn( {name: 'AccountId', type: 'int'})
    AccountID: number;

    @Column({name: 'FirstName', type: 'varchar', length: 20})
    FirstName: string;
    
    @Column({name: 'LastName', type: 'varchar', length: 20})
    LastName: string;

    @Column({type:'varchar', name:'Email'})
    Email:string;

    @Column({type:'varchar', name:'Username'})
    UserName:string;

    @Column({type:'varchar', name:'Password'})
    Password:string;

    @Column({type:'int', name: 'PhoneNumber'})
    PhoneNumber: number;

    @OneToMany(() => LoginHistory, LoginHistory => LoginHistory.Account) 
    LoginHistory: LoginHistory[];
}

@ChildEntity(role.User)
export class User extends Accounts {
    
    @Column({type:'date', name:'DateOfBirth'}) // format of mysql: yyyy-mm-dd
    DateOfBirth: string;

    @Column({type:'varchar', name: 'Address'})
    Address: string;

    @OneToMany(() => Cards, card => card.Account)
    Card: Cards[];

    @OneToMany(() => Payments, payment => payment.User)
    Payment:Payments[];
}

@ChildEntity(role.Admin)
export class Admin extends Accounts {
}