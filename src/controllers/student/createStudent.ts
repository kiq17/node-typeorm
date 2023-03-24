import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { Student } from "../../entities/Students";

interface bodyProps{
    name: string
    age: number
}

export const createStudent = async (req: Request<{}, {}, bodyProps>, res: Response)=>{
    const {name, age} = req.body;

    try {
        const studentRepo = AppDataSource.getRepository(Student);

        const createdStudent = studentRepo.create({name, age});

        await studentRepo.save(createdStudent);

        return res.status(201).json(createdStudent);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
};