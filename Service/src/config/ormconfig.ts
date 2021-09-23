
import { TypeOrmModuleOptions  } from '@nestjs/typeorm'
import * as dotenv from'dotenv';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
dotenv.config();
const {MS_DB_TYPE,MS_DB_PORT, MS_DB_HOST, MS_DB_USERNAME, MS_DB_PASSWORD, MS_DB_DATABASE} = process.env;

const typeOrmConfig: MysqlConnectionOptions = {
    type: 'mysql',
    name: 'hcmiu_se_db',
    host: MS_DB_HOST || "0.0.0.0",
    // host: "",
    port: parseInt(MS_DB_PORT) || 3306,
    username: MS_DB_USERNAME || "nguyenvandat",
    password: MS_DB_PASSWORD ||"hcmiuse14",
    database: "banking",
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false, //Unsafe, not use for product and migration
    migrations: ['dist/src/migration/*.{js,ts}'],
    cli: {
        migrationsDir:'src/migrations',
    }
}



// const typeOrmConfig: MysqlConnectionOptions ={  
//     type: 'mysql',
//     name:'hcmiu_se_db',
//     host: '0.0.0.0',
//     port: 3306,
//     entities: ['dist/**/*.entity{.ts,.js}'],
//     database: "banking",
//     username: "nguyenvandat",
//     password: "hcmiuse14",
//     synchronize: false, //Unsafe, not use for product and migration
//     migrations: ['dist/src/migration/*.{js,ts}'],
//     cli: {
//         migrationsDir:'src/migrations',
//     }
// }

export default typeOrmConfig;