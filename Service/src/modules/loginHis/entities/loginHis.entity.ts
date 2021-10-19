import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Accounts } from '../../account/entities/account.entity';
import { LoginHisStatus } from "./loginHisStatus.entity";


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

    @Column({type:'varchar', name:'Username'})
    UserName:string;

    @Column({type:'varchar', name:'Password'})
    Password:string;

    @ManyToOne(() => Accounts, account => account.LoginHistory)
    Account: Accounts

    @ManyToOne(() => LoginHisStatus, status=> status.LoginHistory)
    LoginHisStatus: LoginHisStatus;
}