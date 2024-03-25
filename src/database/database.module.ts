import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { entities } from './entities';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: `${process.env.MYSQL_TYPE}`, // Use 'MYSQL' for MYSQL
      host: `${process.env.MYSQL_HOST}`,
      port: Number(process.env.MYSQL_PORT),
      username: `${process.env.MYSQL_USER}`,
      password: `${process.env.MYSQL_PASSWORD}`,
      database: `${process.env.MYSQL_DATABASE}`,
      entities: [...entities],
      synchronize: false, // Set to false in production
      logging: false,
      migrations: ['src/migration/*.ts'],
    }),
  ],
})
export class DatabaseModule {}
