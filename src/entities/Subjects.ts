/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Course } from "./Courses";
import { Student } from "./Students";

@Entity("subjects")
export class Subjects {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({ type: "varchar" })
    name: string;

    @Column({ type: "varchar" })
    dayClass: string;

    @Column({ type: "varchar" })
    course_id: string;

    @ManyToOne(() => Course)
    @JoinColumn({ name: "course_id" })
    course: Course;

    @ManyToMany(() => Student, student=> student.subjects)
    @JoinTable({
        name: "student_subject",
        joinColumn:{
            name: "student_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn:{
            name: "subject_id",
            referencedColumnName: "id"
        }
    })
    students: Student[];

    @CreateDateColumn({ type: "date" })
    created_at: Date;
}