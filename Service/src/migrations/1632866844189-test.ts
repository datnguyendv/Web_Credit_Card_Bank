import {MigrationInterface, QueryRunner} from "typeorm";

export class test1632866844189 implements MigrationInterface {
    name = 'test1632866844189'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`banking\`.\`accounts\` (\`AccountId\` int NOT NULL, \`FirstName\` varchar(20) NOT NULL, \`LastName\` varchar(20) NOT NULL, \`Address\` varchar(255) NULL, \`Email\` varchar(255) NULL, \`DateOfBirth\` date NULL, \`PhoneNumber\` int NULL, \`Role\` enum ('User', 'Admin') NOT NULL, UNIQUE INDEX \`REL_69bad9645a72c1b336da42c556\` (\`AccountId\`), INDEX \`IDX_53b0692cfb3ef9daa81e4e3d3b\` (\`Role\`), PRIMARY KEY (\`AccountId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`accounts\` ADD CONSTRAINT \`FK_69bad9645a72c1b336da42c5567\` FOREIGN KEY (\`AccountId\`) REFERENCES \`banking\`.\`accounts\`(\`AccountId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`accounts\` DROP FOREIGN KEY \`FK_69bad9645a72c1b336da42c5567\``);
        await queryRunner.query(`DROP INDEX \`IDX_53b0692cfb3ef9daa81e4e3d3b\` ON \`banking\`.\`accounts\``);
        await queryRunner.query(`DROP INDEX \`REL_69bad9645a72c1b336da42c556\` ON \`banking\`.\`accounts\``);
        await queryRunner.query(`DROP TABLE \`banking\`.\`accounts\``);
    }

}
