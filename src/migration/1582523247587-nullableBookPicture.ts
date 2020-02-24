import { MigrationInterface, QueryRunner } from "typeorm";

export class nullableBookPicture1582523247587 implements MigrationInterface {
  name = "nullableBookPicture1582523247587";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "books" ALTER COLUMN "picture" DROP NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "books" ALTER COLUMN "picture" SET NOT NULL`,
      undefined
    );
  }
}
