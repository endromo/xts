"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
//Routers
const HomeRoutes_1 = __importDefault(require("./routes/HomeRoutes"));
const UsersRoutes_1 = __importDefault(require("./routes/UsersRoutes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
    }
    routes() {
        this.app.use("/", HomeRoutes_1.default);
        this.app.use("/users", UsersRoutes_1.default);
    }
}
const port = 8000;
const app = new App().app;
app.listen(port);
