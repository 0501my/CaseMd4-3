"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderServices_1 = __importDefault(require("../services/orderServices"));
class OrderController {
    constructor() {
        this.create = async (req, res) => {
            try {
                let order = await orderServices_1.default.save(req.body);
                res.status(200).json(order);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.orderService = orderServices_1.default;
    }
}
exports.default = new OrderController();
//# sourceMappingURL=orderController.js.map