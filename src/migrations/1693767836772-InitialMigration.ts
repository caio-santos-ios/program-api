import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1693767836772 implements MigrationInterface {
    name = 'InitialMigration1693767836772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "photo" bytea, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."bios_status_enum" AS ENUM('feliz', 'triste')`);
        await queryRunner.query(`CREATE TABLE "bios" ("id" SERIAL NOT NULL, "status" "public"."bios_status_enum" NOT NULL DEFAULT 'feliz', "descriptionBios" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_9a4e215335c6ae25f9bd778068" UNIQUE ("userId"), CONSTRAINT "PK_dcfe932559c62d58a2da74da200" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bios" ADD CONSTRAINT "FK_9a4e215335c6ae25f9bd7780681" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bios" DROP CONSTRAINT "FK_9a4e215335c6ae25f9bd7780681"`);
        await queryRunner.query(`DROP TABLE "bios"`);
        await queryRunner.query(`DROP TYPE "public"."bios_status_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
