
import { BaseEntity, ChildEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn, TableInheritance } from 'typeorm';
import { accountDto } from '../dto/account.dto';
import { role } from '../dto/accountRole.dto';

@Entity()
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

}


