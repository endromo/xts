"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", (req, res) => {
            res.setHeader("Content-Type", "text/html");
            res.send("<h2 style='color:#0000FF'>ExpressJS with TypeScript</h2>");
        });
    }
}
exports.default = new HomeRoutes().router;
