"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const orderController_1 = __importDefault(require("../controllers/orderController"));
exports.orderRouter = (0, express_1.Router)();
exports.orderRouter.post('/order', orderController_1.default.create);
//# sourceMappingURL=order.router.js.map