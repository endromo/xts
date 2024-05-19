import { Router, Request, Response } from "express";
import IRouter from '../interfaces/IRouter';


class UsersRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get("/", (req: Request, res: Response) => {
            res.setHeader("Content-Type", "text/html");
            res.send("<h2 style='color:#0000FF'>Hai Users</h2>");
        });

        this.router.post("/", (req: Request, res: Response) => {
            res.setHeader("Content-Type", "application/json");
            if (Object.keys(req.body).length == 0) {
                res.status(403);
                res.send('{"statusCode":403, "message": "Forbiden", "error": "no req body"}');
            } else {
                res.status(200);
                res.send(req.body);
            }

        })
    }
}

export default new UsersRoutes().router;
