"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./src/data-source");
data_source_1.AppDataSource.initialize().then(() => {
    console.log('DB connect');
}).catch(err => {
    console.log('Connect Err', err.message);
});
app.use((0, express_session_1.default)({
    resave: true,
    saveUninitialized: true,
    secret: 'Dai',
    cookie: { maxAge: 60000 }
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.listen(3000, () => {
    console.log('server is running http://localhost:3000/home');
});
//# sourceMappingURL=index.js.map