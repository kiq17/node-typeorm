import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { Course } from "../../entities/Courses";

export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courseRepo = AppDataSource.getRepository(Course);

        const courses = await courseRepo.find({ order: { name: "ASC" } });

        return res.status(200).json(courses);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
};