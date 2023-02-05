"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderDetailService_1 = __importDefault(require("../services/orderDetailService"));
class OrderDetailController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let orders = await orderDetailService_1.default.getAll();
                res.status(200).json(orders);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.create = async (req, res) => {
            try {
                let order = await orderDetailService_1.default.save(req.body);
                res.status(200).json(order);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.orderDetailService = orderDetailService_1.default;
    }
}
exports.default = new OrderDetailController;
//# sourceMappingURL=orderDetailController.js.map