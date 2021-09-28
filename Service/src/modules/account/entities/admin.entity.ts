
import { JoinColumn, ChildEntity, Entity, OneToOne } from 'typeorm';
import { role } from '../dto/accountRole.dto';
import { Accounts } from './account.entity';


@ChildEntity(role.Admin)
export class Admin extends Accounts {
    @OneToOne(() => Accounts)
    @JoinColumn({name: 'AccountId'})
    account : Accounts
}
