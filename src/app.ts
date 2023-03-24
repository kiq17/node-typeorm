import "reflect-metadata";
import express from "express";
import "./database";
import studentRoute from "./routes/studentRoute";
import courseRoute from "./routes/courseRoute";
import subjectRotue from "./routes/subjectRoute";
class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(studentRoute);
        this.server.use(courseRoute);
        this.server.use(subjectRotue);
    }
}


export default new App().server;