import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from 'typeorm';
import path from "path";

const dataSource = (): DataSourceOptions => { 
    const entitiPath = path.join(__dirname, './entities/**.{ts,js}')
    const migrationPath = path.join(__dirname, './migrations/**.{ts,js}')

    const dbUrl = process.env.DATABASE_URL

    return {
        type: 'postgres',
        url: dbUrl!,
        synchronize: false,
        logging: false,
        entities: [entitiPath],
        migrations: [migrationPath]
    }
}

export const AppDataSource = new DataSource(dataSource())