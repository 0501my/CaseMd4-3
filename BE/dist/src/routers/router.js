"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const home_router_1 = require("./home.router");
const user_router_1 = require("./user.router");
const category_router_1 = require("./category.router");
const order_router_1 = require("./order.router");
const homeController_1 = __importDefault(require("../controllers/homeController"));
const orderDetail_router_1 = require("./orderDetail.router");
exports.router = (0, express_1.Router)();
exports.router.get('/search', homeController_1.default.search);
exports.router.use('/home', home_router_1.HomeRouter);
exports.router.use('/auth', user_router_1.userRouter);
exports.router.use('/categories', category_router_1.categoryRouter);
exports.router.use('/order', order_router_1.orderRouter);
exports.router.use('/orderDetail', orderDetail_router_1.orderDetailRouter);
//# sourceMappingURL=router.js.map