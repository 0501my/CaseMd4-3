"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeRouter = void 0;
const homeController_1 = __importDefault(require("../controllers/homeController"));
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const checkadmin_1 = require("../middleware/checkadmin");
exports.HomeRouter = (0, express_1.Router)();
exports.HomeRouter.use(auth_1.auth);
exports.HomeRouter.get('/', homeController_1.default.getAll);
exports.HomeRouter.post('/', checkadmin_1.checkAdmin, homeController_1.default.create);
exports.HomeRouter.put('/:id', checkadmin_1.checkAdmin, homeController_1.default.update);
exports.HomeRouter.delete('/:id', checkadmin_1.checkAdmin, homeController_1.default.remove);
exports.HomeRouter.get('/:id', homeController_1.default.findById);
//# sourceMappingURL=home.router.js.map