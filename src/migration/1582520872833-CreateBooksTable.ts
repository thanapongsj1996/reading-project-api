import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBooksTable1582520872833 implements MigrationInterface {
  name = "CreateBooksTable1582520872833";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "books" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "bookId" integer NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "body" character varying NOT NULL, "picture" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "books"`, undefined);
  }
}
