import { Request, Response } from "express";

interface IController {
    index(req: Request, res: Response): Response;
    add(req: Request, res: Response): Response;
    view(req: Request, res: Response): Response;
    update(req: Request, res: Response): Response;
    remove(req: Request, res: Response): Response;
};

export default IController;


