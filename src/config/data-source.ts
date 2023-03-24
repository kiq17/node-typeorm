import "reflect-metadata";
import { DataSource } from "typeorm";
import { Student } from "../entities/Students";
import { Course } from "../entities/Courses";
import { createStudent1676235005990 as createStudent } from "../database/migrations/0001_createStudent";
import { createCourse1676235005990 as createCourse } from "../database/migrations/0002_createCourse";
import { createCourse1676235005999 as createSubject } from "../database/migrations/0003_createSubject";
import {migrations1679674093025 as updateTables} from "../database/migrations/1679674093025-migrations";
import { Subjects } from "../entities/Subjects";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [Student, Course, Subjects], // migration:generate criar as migrations baseado nas entities passadas
    migrations: [
        createStudent,
        createCourse,
        createSubject,
        updateTables
    ], // migration:run roda as migrations passadas no data source
});