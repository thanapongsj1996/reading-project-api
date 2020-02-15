import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLikesTable1581802376566 implements MigrationInterface {
    name = 'CreateLikesTable1581802376566'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "bookId" integer NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "body" character varying NOT NULL, "bookImage" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "like" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "articleId" integer NOT NULL, "emotionId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_eff3e46d24d416b52a7e0ae4159" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_types" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "typeName" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3f05efd7b52a7eca1f6b6f75e45" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user_types"`, undefined);
        await queryRunner.query(`DROP TABLE "like"`, undefined);
        await queryRunner.query(`DROP TABLE "articles"`, undefined);
    }

}
