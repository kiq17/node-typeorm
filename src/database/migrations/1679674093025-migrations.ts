/* eslint-disable quotes */
/* eslint-disable indent */
import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class migrations1679674093025 implements MigrationInterface {
    name = "migrations1679674093025";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student_subject" ("student_id" integer NOT NULL, "subject_id" integer NOT NULL, CONSTRAINT "PK_2777f0eda5eef3c942d923fbcb5" PRIMARY KEY ("student_id", "subject_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8fd179ef9adc4623e3b573824d" ON "student_subject" ("student_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_c8124fdeeb552c4cd882485073" ON "student_subject" ("subject_id") `);
        await queryRunner.query(`ALTER TABLE "student_subject" ADD CONSTRAINT "FK_8fd179ef9adc4623e3b573824d3" FOREIGN KEY ("student_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "student_subject" ADD CONSTRAINT "FK_c8124fdeeb552c4cd882485073f" FOREIGN KEY ("subject_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.addColumn(
            "student_subject", 
            new TableColumn({
                name: "created_at",
                type: "date",
                default: "now()"
            })
        );
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_subject" DROP CONSTRAINT "FK_c8124fdeeb552c4cd882485073f"`);
        await queryRunner.query(`ALTER TABLE "student_subject" DROP CONSTRAINT "FK_8fd179ef9adc4623e3b573824d3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c8124fdeeb552c4cd882485073"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8fd179ef9adc4623e3b573824d"`);
        await queryRunner.query(`DROP TABLE "student_subject"`);
    }

}
