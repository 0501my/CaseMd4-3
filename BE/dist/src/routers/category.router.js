"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
exports.categoryRouter = (0, express_1.Router)();
exports.categoryRouter.get('/', categoryController_1.default.getAll);
//# sourceMappingURL=category.router.js.map