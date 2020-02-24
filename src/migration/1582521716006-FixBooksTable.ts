import { MigrationInterface, QueryRunner } from "typeorm";

export class FixBooksTable1582521716006 implements MigrationInterface {
  name = "FixBooksTable1582521716006";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "userId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "bookId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "title"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "subtitle"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "body"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "authorId" integer NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "categoryId" character varying NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "name" integer NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "introduction" character varying NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "introduction"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "name"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "categoryId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "authorId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "body" character varying NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "subtitle" character varying NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "title" character varying NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "bookId" integer NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "userId" integer NOT NULL`,
      undefined
    );
  }
}
