import {MigrationInterface, QueryRunner} from "typeorm";

export class rmCreatedAtUpdatedEmotion1582042948433 implements MigrationInterface {
    name = 'rmCreatedAtUpdatedEmotion1582042948433'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "emotion" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "emotion" DROP COLUMN "updatedAt"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "emotion" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "emotion" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
    }

}
