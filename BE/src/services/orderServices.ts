import {Order} from "../models/order"
import {AppDataSource} from "../data-source";

class OrderServices {
    private orderRepository

    constructor() {
        this.orderRepository = AppDataSource.getRepository(Order)
    }

    getAll = async () => {

    }
    save = async (order) => {
        return this.orderRepository.save(order)
    }
    update = async () => {

    }
    remove = async () => {

    }
    findById = async () => {

    }
}

export default new OrderServices()