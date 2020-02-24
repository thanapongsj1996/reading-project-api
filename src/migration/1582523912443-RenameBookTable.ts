import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameBookTable1582523912443 implements MigrationInterface {
  name = "RenameBookTable1582523912443";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "book" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "authorId" integer NOT NULL, "categoryId" integer NOT NULL, "name" character varying NOT NULL, "introduction" character varying NOT NULL, "picture" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "book"`, undefined);
  }
}
