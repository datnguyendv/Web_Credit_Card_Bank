import {MigrationInterface, QueryRunner} from "typeorm";

export class loginHisEntity1637440548401 implements MigrationInterface {
    name = 'loginHisEntity1637440548401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` DROP COLUMN \`Location\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` ADD \`Location\` varchar(255) NOT NULL`);
    }

}
