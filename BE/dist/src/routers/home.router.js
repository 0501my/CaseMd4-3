"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeRouter = void 0;
const express_1 = require("express");
const homeController_1 = __importDefault(require("../controllers/homeController"));
const auth_1 = require("../middleware/auth");
exports.HomeRouter = (0, express_1.Router)();
exports.HomeRouter.use(auth_1.auth);
exports.HomeRouter.get('/', homeController_1.default.getAll);
//# sourceMappingURL=home.router.js.map