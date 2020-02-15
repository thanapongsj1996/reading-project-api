import {MigrationInterface, QueryRunner} from "typeorm";

export class JoinLikesToUserAndArticle1581804068169 implements MigrationInterface {
    name = 'JoinLikesToUserAndArticle1581804068169'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "bookId" integer NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "body" character varying NOT NULL, "bookImage" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_types" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "typeName" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3f05efd7b52a7eca1f6b6f75e45" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_e8fb739f08d47955a39850fac23" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_a95ce350aee91167d8a1cefeb97" FOREIGN KEY ("articleId") REFERENCES "article"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_a95ce350aee91167d8a1cefeb97"`, undefined);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_e8fb739f08d47955a39850fac23"`, undefined);
        await queryRunner.query(`DROP TABLE "user_types"`, undefined);
        await queryRunner.query(`DROP TABLE "articles"`, undefined);
    }

}
