/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("courses")
export class Course {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({ type: "varchar" })
    name: string;

    @CreateDateColumn({ type: "date" })
    created_at: Date;
}