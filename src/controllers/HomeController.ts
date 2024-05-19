import { Request, Response } from "express";
import IController from '../interfaces/IController';
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

class HomeController implements IController {
    constructor() {
        
    }
    index(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    add(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    view(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    update(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    remove(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
}