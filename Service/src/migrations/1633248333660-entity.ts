import {MigrationInterface, QueryRunner} from "typeorm";

export class entity1633248333660 implements MigrationInterface {
    name = 'entity1633248333660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` DROP FOREIGN KEY \`FK_7700d57e846e91ea8e660ba80ce\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` DROP FOREIGN KEY \`FK_cebe1f100454e88ab941d8c06a1\``);
        await queryRunner.query(`DROP INDEX \`REL_cebe1f100454e88ab941d8c06a\` ON \`banking\`.\`Accounts\``);
        await queryRunner.query(`CREATE TABLE \`banking\`.\`PaymentTypes\` (\`paymentTypeID\` int NOT NULL AUTO_INCREMENT, \`TypeName\` varchar(255) NOT NULL, \`PaymentFee\` int NOT NULL, PRIMARY KEY (\`paymentTypeID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`banking\`.\`PaymentStatuses\` (\`PaymentStatus\` int NOT NULL AUTO_INCREMENT, \`StatusName\` varchar(255) NOT NULL, PRIMARY KEY (\`PaymentStatus\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`banking\`.\`Payments\` (\`PaymentId\` int NOT NULL AUTO_INCREMENT, \`Amount\` int NOT NULL, \`Location\` varchar(255) NOT NULL, \`Time\` time NOT NULL, \`userAccountID\` int NULL, \`paymentTypePaymentTypeID\` int NULL, \`paymentStatusPaymentStatusID\` int NULL, PRIMARY KEY (\`PaymentId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`banking\`.\`CardStatuses\` (\`StatusID\` int NOT NULL AUTO_INCREMENT, \`StatusName\` varchar(255) NOT NULL, PRIMARY KEY (\`StatusID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`banking\`.\`CardTypes\` (\`CardTypeId\` int NOT NULL AUTO_INCREMENT, \`TypeName\` varchar(255) NOT NULL, \`LineOfDebit\` int NOT NULL, PRIMARY KEY (\`CardTypeId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`banking\`.\`Cards\` (\`CardID\` int NOT NULL, \`CurrentBalance\` int NOT NULL, \`CVV\` int NOT NULL, \`Status\` varchar(255) NOT NULL, \`DateOfExpired\` datetime NOT NULL, \`accountAccountID\` int NULL, \`cardTypeCardTypeId\` int NULL, \`cardStatusStatusID\` int NULL, PRIMARY KEY (\`CardID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`banking\`.\`LoginHisStatuses\` (\`StatusID\` int NOT NULL AUTO_INCREMENT, \`StatusName\` varchar(255) NOT NULL, PRIMARY KEY (\`StatusID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` DROP COLUMN \`accountIdAccountID\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` ADD \`Username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` ADD \`Password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` ADD \`accountAccountID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` ADD \`loginHisStatusStatusID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` ADD \`Username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` ADD \`Password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` CHANGE \`Email\` \`Email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` CHANGE \`PhoneNumber\` \`PhoneNumber\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD CONSTRAINT \`FK_08cc1b0efe6dbedeed1f1a7678b\` FOREIGN KEY (\`userAccountID\`) REFERENCES \`banking\`.\`Accounts\`(\`AccountId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD CONSTRAINT \`FK_0f2f601e8b284df996f29d77b2e\` FOREIGN KEY (\`paymentTypePaymentTypeID\`) REFERENCES \`banking\`.\`PaymentTypes\`(\`paymentTypeID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` ADD CONSTRAINT \`FK_269073d20ca46a52b723a5885d6\` FOREIGN KEY (\`paymentStatusPaymentStatusID\`) REFERENCES \`banking\`.\`PaymentStatuses\`(\`PaymentStatus\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` ADD CONSTRAINT \`FK_bbb8ab8de96c0380628843b0ce6\` FOREIGN KEY (\`accountAccountID\`) REFERENCES \`banking\`.\`Accounts\`(\`AccountId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` ADD CONSTRAINT \`FK_4465531add1e5ac45da41ced3bd\` FOREIGN KEY (\`cardTypeCardTypeId\`) REFERENCES \`banking\`.\`CardTypes\`(\`CardTypeId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` ADD CONSTRAINT \`FK_336d46ddc07eb8784995d071bfa\` FOREIGN KEY (\`cardStatusStatusID\`) REFERENCES \`banking\`.\`CardStatuses\`(\`StatusID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` ADD CONSTRAINT \`FK_12fc911a078b97c4b685f07b774\` FOREIGN KEY (\`accountAccountID\`) REFERENCES \`banking\`.\`Accounts\`(\`AccountId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` ADD CONSTRAINT \`FK_17c6fa9170c765708b9c5cf77e8\` FOREIGN KEY (\`loginHisStatusStatusID\`) REFERENCES \`banking\`.\`LoginHisStatuses\`(\`StatusID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` DROP FOREIGN KEY \`FK_17c6fa9170c765708b9c5cf77e8\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` DROP FOREIGN KEY \`FK_12fc911a078b97c4b685f07b774\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` DROP FOREIGN KEY \`FK_336d46ddc07eb8784995d071bfa\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` DROP FOREIGN KEY \`FK_4465531add1e5ac45da41ced3bd\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Cards\` DROP FOREIGN KEY \`FK_bbb8ab8de96c0380628843b0ce6\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP FOREIGN KEY \`FK_269073d20ca46a52b723a5885d6\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP FOREIGN KEY \`FK_0f2f601e8b284df996f29d77b2e\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Payments\` DROP FOREIGN KEY \`FK_08cc1b0efe6dbedeed1f1a7678b\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` CHANGE \`PhoneNumber\` \`PhoneNumber\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` CHANGE \`Email\` \`Email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` DROP COLUMN \`Password\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` DROP COLUMN \`Username\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` DROP COLUMN \`loginHisStatusStatusID\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` DROP COLUMN \`accountAccountID\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` DROP COLUMN \`Password\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` DROP COLUMN \`Username\``);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` ADD \`accountIdAccountID\` int NULL`);
        await queryRunner.query(`DROP TABLE \`banking\`.\`LoginHisStatuses\``);
        await queryRunner.query(`DROP TABLE \`banking\`.\`Cards\``);
        await queryRunner.query(`DROP TABLE \`banking\`.\`CardTypes\``);
        await queryRunner.query(`DROP TABLE \`banking\`.\`CardStatuses\``);
        await queryRunner.query(`DROP TABLE \`banking\`.\`Payments\``);
        await queryRunner.query(`DROP TABLE \`banking\`.\`PaymentStatuses\``);
        await queryRunner.query(`DROP TABLE \`banking\`.\`PaymentTypes\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_cebe1f100454e88ab941d8c06a\` ON \`banking\`.\`Accounts\` (\`AccountId\`)`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`Accounts\` ADD CONSTRAINT \`FK_cebe1f100454e88ab941d8c06a1\` FOREIGN KEY (\`AccountId\`) REFERENCES \`banking\`.\`Accounts\`(\`AccountId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`banking\`.\`LoginHistories\` ADD CONSTRAINT \`FK_7700d57e846e91ea8e660ba80ce\` FOREIGN KEY (\`accountIdAccountID\`) REFERENCES \`banking\`.\`Accounts\`(\`AccountId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
