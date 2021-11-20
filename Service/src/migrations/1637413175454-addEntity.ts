import {MigrationInterface, QueryRunner} from "typeorm";

export class addEntity1637413175454 implements MigrationInterface {
    name = 'addEntity1637413175454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP COLUMN \`Amount\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD \`Amount\` bigint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP COLUMN \`Amount\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD \`Amount\` int NOT NULL`);
    }

}
