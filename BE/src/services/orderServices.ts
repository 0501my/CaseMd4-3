import {Order} from "../models/order"
import {AppDataSource} from "../data-source";

class OrderServices {
    private orderRepository

    constructor() {
        this.orderRepository = AppDataSource.getRepository(Order)
    }

    getAll = async ()=>{
        let sql = `select o.id, totalPrice, o.status, u.username as 'nguoithue',ch.chunha, name, image, price
                   from \`order\` o
                            join user u on o.idUser = u.id
                            join \`order_detail\` od on o.id = od.idOrder
                            join (select h.id, name, image, price, u.username as 'chunha'
                                  from home h
                                           join user u on h.idUser = u.id) ch on ch.id = od.idHome;`
        let orders = await this.orderRepository.query(sql)
        return orders;
    }
    save = async (order) => {
        return this.orderRepository.save(order)
    }
    update = async (id, newOrder)=>{
        let order = await this.orderRepository.findOneBy({id:id});
        if(!order){
            return null;
        }
        return this.orderRepository.update({id:id},newOrder);
    }
    remove = async (id)=>{
        let order = await this.orderRepository.findOneBy({id:id});
        if(!order){
            return null;
        }
        return this.orderRepository.delete({id: id});
    }
    findById = async (id)=>{
        let order = await this.orderRepository.findOneBy({id:id});
        if(!order){
            return null;
        }
        return order;
    }
}

export default new OrderServices()