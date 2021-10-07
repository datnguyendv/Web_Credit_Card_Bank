import {MigrationInterface, QueryRunner} from "typeorm";

export class updateEntity1633298445404 implements MigrationInterface {
    name = 'updateEntity1633298445404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` DROP COLUMN \`Status\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD \`Date\` date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP COLUMN \`Date\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` ADD \`Status\` varchar(255) NOT NULL`);
    }

}
