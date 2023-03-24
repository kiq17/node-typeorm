import { RequestHandler } from "express";
import { AppDataSource } from "../../config/data-source";
import { Subjects } from "../../entities/Subjects";


export const getByCourse: RequestHandler = async (req, res) => {
    try {
        
        // buscando por materias pelo nome do curso
        const getByCourse = await AppDataSource.getRepository(Subjects).findAndCount({
            select:{
                name: true,
                dayClass: true
            },
            where: {
                course: {
                    name: "Sistema de Informação"
                }
            }/* ,
            relations:{
                course: true
            } */
            // caso queria retorna junto com os dados do curso basta adiciona os relations
        });

        const [subjects, quantiy] = getByCourse;

        
        // retornando as materais prensete no curso de Sistema de Informação junto com a quantidade 
        return res.status(200).json({subjects, quantiy});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};