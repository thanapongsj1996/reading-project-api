import { MigrationInterface, QueryRunner } from "typeorm";

export class BookIdCanNull1581278181390 implements MigrationInterface {
  name = "BookIdCanNull1581278181390";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "bookImage" DROP NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "bookImage" SET NOT NULL`,
      undefined
    );
  }
}
