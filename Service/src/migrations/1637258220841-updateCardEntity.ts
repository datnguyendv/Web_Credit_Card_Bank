import {MigrationInterface, QueryRunner} from "typeorm";

export class updateCardEntity1637258220841 implements MigrationInterface {
    name = 'updateCardEntity1637258220841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` CHANGE \`DateOfExpired\` \`DateOfExpired\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` CHANGE \`DateOfExpired\` \`DateOfExpired\` datetime(0) NOT NULL`);
    }

}
