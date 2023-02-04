"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../models/order");
const data_source_1 = require("../data-source");
class OrderServices {
    constructor() {
        this.getAll = async () => {
            let sql = `select o.id, totalPrice, o.status, u.username as 'nguoithue',ch.chunha, name, image, price
                   from \`order\` o
                            join user u on o.idUser = u.id
                            join \`order_detail\` od on o.id = od.idOrder
                            join (select h.id, name, image, price, u.username as 'chunha'
                                  from home h
                                           join user u on h.idUser = u.id) ch on ch.id = od.idHome;`;
            let orders = await this.orderRepository.query(sql);
            return orders;
        };
        this.save = async (order) => {
            return this.orderRepository.save(order);
        };
        this.update = async (id, newOrder) => {
            let order = await this.orderRepository.findOneBy({ id: id });
            if (!order) {
                return null;
            }
            return this.orderRepository.update({ id: id }, newOrder);
        };
        this.remove = async (id) => {
            let order = await this.orderRepository.findOneBy({ id: id });
            if (!order) {
                return null;
            }
            return this.orderRepository.delete({ id: id });
        };
        this.findById = async (id) => {
            let order = await this.orderRepository.findOneBy({ id: id });
            if (!order) {
                return null;
            }
            return order;
        };
        this.orderRepository = data_source_1.AppDataSource.getRepository(order_1.Order);
    }
}
exports.default = new OrderServices();
//# sourceMappingURL=orderServices.js.map