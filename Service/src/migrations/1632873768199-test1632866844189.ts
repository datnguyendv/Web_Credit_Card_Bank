import {MigrationInterface, QueryRunner} from "typeorm";

export class test16328668441891632873768199 implements MigrationInterface {
    name = 'test16328668441891632873768199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`banking\`.\`LoginHistory\` (\`LoginId\` int NOT NULL AUTO_INCREMENT, \`Date\` date NOT NULL, \`Location\` varchar(255) NOT NULL, \`Time\` time NOT NULL, \`accountIdAccountID\` int NULL, PRIMARY KEY (\`LoginId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistory\` ADD CONSTRAINT \`FK_b45909b695697ef9af37103fa35\` FOREIGN KEY (\`accountIdAccountID\`) REFERENCES \`banking\`.\`accounts\`(\`AccountId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistory\` DROP FOREIGN KEY \`FK_b45909b695697ef9af37103fa35\``);
        await queryRunner.query(`DROP TABLE \`banking\`.\`LoginHistory\``);
    }

}
