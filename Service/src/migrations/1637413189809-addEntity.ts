import {MigrationInterface, QueryRunner} from "typeorm";

export class addEntity1637413189809 implements MigrationInterface {
    name = 'addEntity1637413189809'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD \`CurrentBalance\` bigint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP COLUMN \`CurrentBalance\``);
    }

}
