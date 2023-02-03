"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../models/order");
const data_source_1 = require("../data-source");
class OrderServices {
    constructor() {
        this.getAll = async () => {
        };
        this.save = async (order) => {
            return this.orderRepository.save(order);
        };
        this.update = async () => {
        };
        this.remove = async () => {
        };
        this.findById = async () => {
        };
        this.orderRepository = data_source_1.AppDataSource.getRepository(order_1.Order);
    }
}
exports.default = new OrderServices();
//# sourceMappingURL=orderServices.js.map