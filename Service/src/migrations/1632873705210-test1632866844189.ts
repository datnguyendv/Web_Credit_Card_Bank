import {MigrationInterface, QueryRunner} from "typeorm";

export class test16328668441891632873705210 implements MigrationInterface {
    name = 'test16328668441891632873705210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`banking\`.\`login_history\` (\`LoginId\` int NOT NULL AUTO_INCREMENT, \`Date\` date NOT NULL, \`Location\` varchar(255) NOT NULL, \`Time\` time NOT NULL, \`accountIdAccountID\` int NULL, PRIMARY KEY (\`LoginId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`login_history\` ADD CONSTRAINT \`FK_54230cb3c66ed3b694bd12dd632\` FOREIGN KEY (\`accountIdAccountID\`) REFERENCES \`banking\`.\`accounts\`(\`AccountId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`login_history\` DROP FOREIGN KEY \`FK_54230cb3c66ed3b694bd12dd632\``);
        await queryRunner.query(`DROP TABLE \`banking\`.\`login_history\``);
    }

}
