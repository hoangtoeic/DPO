import { entities } from './entities';
import { config } from 'dotenv';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
config();

const loMigrationConfig = {
  type: `${process.env.MYSQL_TYPE}`, // Use 'MYSQL' for MYSQL
  host: `${process.env.MYSQL_HOST}`,
  port: Number(process.env.MYSQL_PORT),
  username: `${process.env.MYSQL_USER}`,
  password: `${process.env.MYSQL_PASSWORD}`,
  database: `${process.env.MYSQL_DATABASE}`,
  synchronize: false,
  logging: true,
  entities: entities,
  migrations: ['**/migration/*.ts'],
} as MysqlConnectionOptions;

export = loMigrationConfig;
