import {MigrationInterface, QueryRunner} from "typeorm";

export class updateType1637221042280 implements MigrationInterface {
    name = 'updateType1637221042280'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP FOREIGN KEY \`FK_06c8b1750f5c7c898abe20da410\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP COLUMN \`cardCardID\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD \`cardCardID\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` DROP COLUMN \`CardID\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` ADD \`CardID\` bigint NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` DROP COLUMN \`CurrentBalance\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` ADD \`CurrentBalance\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` DROP COLUMN \`IdentifyCard\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` ADD \`IdentifyCard\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD CONSTRAINT \`FK_06c8b1750f5c7c898abe20da410\` FOREIGN KEY (\`cardCardID\`) REFERENCES \`banking\`.\`Cards\`(\`CardID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP FOREIGN KEY \`FK_06c8b1750f5c7c898abe20da410\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` DROP COLUMN \`IdentifyCard\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` ADD \`IdentifyCard\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` DROP COLUMN \`CurrentBalance\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` ADD \`CurrentBalance\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` DROP COLUMN \`CardID\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` ADD \`CardID\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` ADD PRIMARY KEY (\`CardID\`)`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP COLUMN \`cardCardID\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD \`cardCardID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD CONSTRAINT \`FK_06c8b1750f5c7c898abe20da410\` FOREIGN KEY (\`cardCardID\`) REFERENCES \`banking\`.\`Cards\`(\`CardID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
