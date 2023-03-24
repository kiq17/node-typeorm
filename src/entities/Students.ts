/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany } from "typeorm";
import { Subjects } from "../entities/Subjects";

@Entity("students")
export class Student {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({ type: "varchar" })
    name: string;

    @Column({ type: "int" })
    age: number;

    @ManyToMany(()=> Subjects, subject => subject.students)
    subjects: Subjects[];
    
    @CreateDateColumn({ type: "date" })
    created_at: Date;
}