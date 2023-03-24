import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { Course } from "../../entities/Courses";

interface bodyProps {
    name: string
}

export const createCourse = async (req: Request<{}, {}, bodyProps>, res: Response) => {
    const { name } = req.body;

    try {
        const courseRepo = AppDataSource.getRepository(Course);

        const createdCourse = courseRepo.create({name});

        await courseRepo.save(createdCourse);

        return res.status(201).json(createdCourse);
    } catch (error) {
        console.log(error);
        return res.status(500).json({messsage: "Internal server error"});
    }
};