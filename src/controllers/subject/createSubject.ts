import { Response, Request } from "express";
import { Subjects } from "../../entities/Subjects";
import { AppDataSource } from "../../config/data-source";

interface bodyProps {
    name: string
    dayClass: string
}

interface paramsProps {
    courseId: string
}


export const createSubject = async (req: Request<paramsProps, {}, bodyProps>, res: Response) => {
    const { name, dayClass } = req.body;
    const { courseId } = req.params;

    const subjectRepo = AppDataSource.getRepository(Subjects);

    try {
        const createdSubject = await subjectRepo.create({ name, dayClass, course_id: courseId });

        await subjectRepo.save(createdSubject);

        res.status(201).json(createdSubject);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }



};