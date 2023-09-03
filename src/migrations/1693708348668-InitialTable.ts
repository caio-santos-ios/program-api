import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialTable1693708348668 implements MigrationInterface {
    name = 'InitialTable1693708348668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."bios_status_enum" AS ENUM('feliz', 'triste')`);
        await queryRunner.query(`CREATE TABLE "bios" ("id" SERIAL NOT NULL, "status" "public"."bios_status_enum" NOT NULL DEFAULT 'feliz', "descriptionBios" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_9a4e215335c6ae25f9bd778068" UNIQUE ("userId"), CONSTRAINT "PK_dcfe932559c62d58a2da74da200" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bios" ADD CONSTRAINT "FK_9a4e215335c6ae25f9bd7780681" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bios" DROP CONSTRAINT "FK_9a4e215335c6ae25f9bd7780681"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`DROP TABLE "bios"`);
        await queryRunner.query(`DROP TYPE "public"."bios_status_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "posts"`);
    }

}
