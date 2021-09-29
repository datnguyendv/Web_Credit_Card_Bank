import { User } from "src/modules/account/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Accounts } from '../../account/entities/account.entity';


@Entity('LoginHistories')
export class LoginHistory {
    @PrimaryGeneratedColumn({type:'int', name:'LoginId', })
    LoginId: number;

    @Column({type:'date', name: 'Date'})
    Date: string;

    @Column({type: 'varchar', name:'Location'})
    Location: string;

    @Column ({type:'time', name: 'Time'})
    Time:string;

    @ManyToOne(() => User, user => user.AccountID)
    AccountId: User
}