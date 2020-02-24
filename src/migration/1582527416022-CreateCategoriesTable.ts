import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCategoriesTable1582527416022 implements MigrationInterface {
    name = 'CreateCategoriesTable1582527416022'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "bookId" integer NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "body" character varying NOT NULL, "bookImage" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "authorId" integer NOT NULL, "categoryId" integer NOT NULL, "name" character varying NOT NULL, "introduction" character varying NOT NULL, "picture" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "category_entity" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1a38b9007ed8afab85026703a53" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_types" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "typeName" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3f05efd7b52a7eca1f6b6f75e45" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user_types"`, undefined);
        await queryRunner.query(`DROP TABLE "category_entity"`, undefined);
        await queryRunner.query(`DROP TABLE "books"`, undefined);
        await queryRunner.query(`DROP TABLE "articles"`, undefined);
    }

}
