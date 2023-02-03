import {Request, Response} from "express";
import orderServices from "../services/orderServices";

class OrderController{
    private orderService
    constructor() {
        this.orderService = orderServices
    }
    create = async (req: Request, res: Response) => {
        try {
            let order = await orderServices.save(req.body)
            res.status(200).json(order)

        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }

    }
}

export default new OrderController()