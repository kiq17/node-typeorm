import { Router } from "express";
import { createCourse, getAllCourses} from "../controllers/course";

const routes = Router();


routes.post("/course", createCourse);
routes.get("/course", getAllCourses);

export default routes;