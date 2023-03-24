import { Router } from "express";

const routes = Router();
import { createStudent } from "../controllers/student";

routes.post("/student", createStudent);

export default routes;