import { Router, Request, Response } from "express";
import IRouter from '../interfaces/IRouter';


class HomeRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get("/", (req: Request, res: Response) => {
            res.setHeader("Content-Type", "text/html");
            res.send("<h2 style='color:#0000FF'>ExpressJS with TypeScript</h2>");
        });
    }
}

export default new HomeRoutes().router;
