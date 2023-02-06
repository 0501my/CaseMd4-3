import {OrderDetail} from "../models/orderdetail"
import {AppDataSource} from "../data-source";

class OrderDetailServices {
    private orderDetailRepository

    constructor() {
        this.orderDetailRepository = AppDataSource.getRepository(OrderDetail)
    }

    getAll = async () => {
        let sql = `select o.id,
                          totalPrice,
                          o.status,
                          startTime,
                          endTime,
                          ch.id as idHome,
                          u.id as 'idnguoithue', u.username as 'nguoithue',ch.chunha,
                          name,
                          image,
                          price
                   from \`order\` o
                            join user u on o.idUser = u.id
                            join \`order_detail\` od on o.id = od.idOrder
                            join (select h.id, name, image, price, u.username as 'chunha'
                                  from home h
                                           join user u on h.idUser = u.id) ch on ch.id = od.idHome;`
        let orders = await this.orderDetailRepository.query(sql)
        return orders;
    }
    save = async (orderDetail) => {
        return this.orderDetailRepository.save(orderDetail)
    }
    update = async (id, newOrderDetail) => {
        let orderDetail = await this.orderDetailRepository.findOneBy({id: id});
        if (!orderDetail) {
            return null;
        }
        return this.orderDetailRepository.update({id: id}, newOrderDetail);
    }
    remove = async (id) => {
        let orderDetail = await this.orderDetailRepository.findOneBy({id: id});
        if (!orderDetail) {
            return null;
        }
        return this.orderDetailRepository.delete({id: id});
    }
}

export default new OrderDetailServices()
