import {MigrationInterface, QueryRunner} from "typeorm";

export class test1632874078683 implements MigrationInterface {
    name = 'test1632874078683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`banking\`.\`LoginHistories\` (\`LoginId\` int NOT NULL AUTO_INCREMENT, \`Date\` date NOT NULL, \`Location\` varchar(255) NOT NULL, \`Time\` time NOT NULL, \`accountIdAccountID\` int NULL, PRIMARY KEY (\`LoginId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` ADD CONSTRAINT \`FK_7700d57e846e91ea8e660ba80ce\` FOREIGN KEY (\`accountIdAccountID\`) REFERENCES \`banking\`.\`Accounts\`(\`AccountId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` DROP FOREIGN KEY \`FK_7700d57e846e91ea8e660ba80ce\``);
        await queryRunner.query(`DROP TABLE \`banking\`.\`LoginHistories\``);
    }

}
