import { TypeOrmModuleOptions  } from '@nestjs/typeorm'
import * as dotenv from'dotenv';

dotenv.config();
const {MS_DB_TYPE,MS_DB_PORT, MS_DB_HOST, MS_DB_USERNAME, MS_DB_PASSWORD, MS_DB_DATABASE} = process.env;
const typeOrmConfig: TypeOrmModuleOptions = {
    // name: 'mysql',
    type: 'mysql',
    host: MS_DB_HOST || 'localhost',
    port: parseInt(MS_DB_PORT) || 3306,
    username: MS_DB_USERNAME || 'nguyenvandat',
    password: MS_DB_PASSWORD || 'hcmiuse@14',
    database: MS_DB_DATABASE || 'banking',
    entities: ['dist/**/*.entity{.ts,.js}'],
    // synchronize: true, //Unsafe,
    migrations: ['dist/src/migration/*.{js,ts}'],
    cli: {
        migrationsDir:'src/migrations',
    }
}

export default typeOrmConfig;