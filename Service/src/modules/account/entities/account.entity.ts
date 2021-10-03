
import { BaseEntity, ChildEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, TableInheritance } from 'typeorm';
import { accountDto } from '../dto/account.dto';
import { role } from '../dto/accountRole.dto';
import { LoginHistory } from '../../login/entities/loginHis.entity';

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
    
    @Column({type:'varchar', name: 'Address'})
    Address: string;

    @Column({type:'varchar', name:'Email'})
    Email:string;

    @Column({type:'date', name:'DateOfBirth'}) // format of mysql: yyyy-mm-dd
    DateOfBirth: string;

    @Column({type:'int', name: 'PhoneNumber'})
    PhoneNumber: number;

    @OneToMany(() => LoginHistory, LoginHistory => LoginHistory.AccountId) 
    LoginHistory: LoginHistory[];
}


