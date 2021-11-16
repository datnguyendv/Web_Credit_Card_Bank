import {MigrationInterface, QueryRunner} from "typeorm";

export class change1636994749200 implements MigrationInterface {
    name = 'change1636994749200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP FOREIGN KEY \`FK_8b4890b59836a8001b1b26cb81a\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` CHANGE \`userAccountId\` \`cardCardID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD CONSTRAINT \`FK_06c8b1750f5c7c898abe20da410\` FOREIGN KEY (\`cardCardID\`) REFERENCES \`banking\`.\`Cards\`(\`CardID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP FOREIGN KEY \`FK_06c8b1750f5c7c898abe20da410\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` CHANGE \`cardCardID\` \`userAccountId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD CONSTRAINT \`FK_8b4890b59836a8001b1b26cb81a\` FOREIGN KEY (\`userAccountId\`) REFERENCES \`banking\`.\`Accounts\`(\`AccountId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
