import { MigrationInterface, QueryRunner } from "typeorm";

export class FixBooksTable21582522861117 implements MigrationInterface {
  name = "FixBooksTable21582522861117";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "categoryId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "categoryId" integer NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "name"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "name" character varying NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "name"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "name" integer NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" DROP COLUMN "categoryId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "books" ADD "categoryId" character varying NOT NULL`,
      undefined
    );
  }
}
