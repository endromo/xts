import express, { Application, Request, Response } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

//Routers
import HomeRoutes from './routes/HomeRoutes';
import UsersRoutes from './routes/UsersRoutes';

class App {
    public app: Application;
    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(morgan("dev"));
    }

    protected routes(): void {
        this.app.use("/", HomeRoutes);
        this.app.use("/users", UsersRoutes);
    }
}

const port: number = 8000;
const app = new App().app;
app.listen(port);