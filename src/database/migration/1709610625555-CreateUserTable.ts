import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1709610774069 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "users" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "email" character varying NOT NULL,
            "password" character varying NOT NULL,
            "phonenumber" character varying NOT NULL,
            "firstname" character varying,
            "helpingPerson" character varying,
            "lastname" character varying,
            "fullname" character varying,
            "address1" character varying,
            "address2" character varying,
            "postalcode" character varying,
            "city" character varying,
            "avatar" character varying,
            "language" character varying,
            createdat TIMESTAMP DEFAULT CURRENT_DATE,
            updatedat TIMESTAMP DEFAULT CURRENT_DATE,
            deletedat TIMESTAMP,
            deleted BOOLEAN DEFAULT false,
            verify BOOLEAN DEFAULT false,
            "location" character varying,
            "savedplace" jsonb[],
            "deviceid" character varying,
            "role" character varying NOT NULL,
            CONSTRAINT "PK_users" PRIMARY KEY ("id")
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
