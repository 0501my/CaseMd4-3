"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/login', userController_1.default.login);
exports.userRouter.post('/signup', userController_1.default.register);
exports.userRouter.post('/changepassword', userController_1.default.changePassword);
//# sourceMappingURL=user.router.js.map