"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const home_router_1 = require("./home.router");
exports.router = (0, express_1.Router)();
exports.router.use('/home', home_router_1.HomeRouter);
//# sourceMappingURL=router.js.map