import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAuthorTable1582525532447 implements MigrationInterface {
    name = 'CreateAuthorTable1582525532447'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "bookId" integer NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "body" character varying NOT NULL, "bookImage" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "info" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "authorId" integer NOT NULL, "categoryId" integer NOT NULL, "name" character varying NOT NULL, "introduction" character varying NOT NULL, "picture" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_types" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "typeName" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3f05efd7b52a7eca1f6b6f75e45" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "FK_1a6d2a7357bc38ae7972947228b" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "FK_1a6d2a7357bc38ae7972947228b"`, undefined);
        await queryRunner.query(`DROP TABLE "user_types"`, undefined);
        await queryRunner.query(`DROP TABLE "books"`, undefined);
        await queryRunner.query(`DROP TABLE "author"`, undefined);
        await queryRunner.query(`DROP TABLE "articles"`, undefined);
    }

}
