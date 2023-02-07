"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDetailRouter = void 0;
const express_1 = require("express");
const orderDetailController_1 = __importDefault(require("../controllers/orderDetailController"));
exports.orderDetailRouter = (0, express_1.Router)();
exports.orderDetailRouter.get('/', orderDetailController_1.default.getAll);
exports.orderDetailRouter.post('/', orderDetailController_1.default.create);
exports.orderDetailRouter.delete('/:id', orderDetailController_1.default.remove);
//# sourceMappingURL=orderDetail.router.js.map