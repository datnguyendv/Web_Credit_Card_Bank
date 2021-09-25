
import { TypeOrmModuleOptions  } from '@nestjs/typeorm'
import * as dotenv from'dotenv';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
dotenv.config();
const {MS_DB_TYPE,MS_DB_PORT, MS_DB_HOST, MS_DB_USERNAME, MS_DB_PASSWORD, MS_DB_DATABASE} = process.env;


//remember access account in mysql server
const typeOrmConfig: MysqlConnectionOptions = {
    type: 'mysql',
    // name: 'hcmiu_se_db',
    host: MS_DB_HOST || "0.0.0.0",
    // host: "",
    port: parseInt(MS_DB_PORT) || 3306,
    username: MS_DB_USERNAME || "nguyenvandat",
    password: MS_DB_PASSWORD ||"hcmiuse@14",
    database: "banking",
    entities: ['dist/src/**/*.entity{.ts,.js}'],
    synchronize: false, //Unsafe, not use for product and migration
    migrations: ['dist/src/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
}

export default typeOrmConfig;