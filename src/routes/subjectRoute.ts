import { Router } from "express";
import { createSubject, getByCourse } from "../controllers/subject";

const routes = Router();


routes.post("/subject/:courseId", createSubject);

routes.get("/subject", getByCourse);

export default routes;