import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEmotionTable1582042411608 implements MigrationInterface {
    name = 'CreateEmotionTable1582042411608'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "emotion" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_438ccbb44b03e5b3a7667278155" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "bookId" integer NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "body" character varying NOT NULL, "bookImage" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_types" ("id" SERIAL NOT NULL, "uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "typeName" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3f05efd7b52a7eca1f6b6f75e45" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_15ebbcf0a4fa032fadd5efcae5e" FOREIGN KEY ("emotionId") REFERENCES "emotion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_15ebbcf0a4fa032fadd5efcae5e"`, undefined);
        await queryRunner.query(`DROP TABLE "user_types"`, undefined);
        await queryRunner.query(`DROP TABLE "articles"`, undefined);
        await queryRunner.query(`DROP TABLE "emotion"`, undefined);
    }

}
