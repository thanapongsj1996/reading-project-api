import { MigrationInterface, QueryRunner } from "typeorm";

export class FixBooksTable31582523099626 implements MigrationInterface {
  name = "FixBooksTable31582523099626";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "books" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "authorId" integer NOT NULL, "categoryId" integer NOT NULL, "name" character varying NOT NULL, "introduction" character varying NOT NULL, "picture" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "books"`, undefined);
  }
}
