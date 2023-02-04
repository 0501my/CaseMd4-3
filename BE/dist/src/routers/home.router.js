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
exports.HomeRouter.get('/', homeController_1.default.getAll);
exports.HomeRouter.post('/', auth_1.auth, homeController_1.default.create);
exports.HomeRouter.put('/:id', auth_1.auth, homeController_1.default.update);
exports.HomeRouter.delete('/:id', auth_1.auth, homeController_1.default.delete);
exports.HomeRouter.get('/:id', auth_1.auth, homeController_1.default.findById);
//# sourceMappingURL=home.router.js.map