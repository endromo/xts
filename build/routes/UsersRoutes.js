"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", (req, res) => {
            res.setHeader("Content-Type", "text/html");
            res.send("<h2 style='color:#0000FF'>Hi Users</h2>");
        });
        this.router.post("/", (req, res) => {
            res.setHeader("Content-Type", "application/json");
            if (Object.keys(req.body).length == 0) {
                res.status(403);
                res.send('{"statusCode":403, "message": "Forbiden", "error": "no request found"}');
            }
            else {
                res.status(200);
                res.send(req.body);
            }
        });
    }
}
exports.default = new UsersRoutes().router;
