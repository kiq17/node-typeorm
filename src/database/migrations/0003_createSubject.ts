import {
    MigrationInterface,
    QueryRunner,
    Table,
} from "typeorm";

export class createCourse1676235005999 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "subjects",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "dayClass",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "course_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_course",
                        columnNames: ["course_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "courses"
                    }
                ]
            }),
        );
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("subjects");
    }
}