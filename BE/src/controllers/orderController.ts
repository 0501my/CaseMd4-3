import {Request, Response} from "express";
import orderServices from "../services/orderServices";

class OrderController{
    private orderService
    constructor() {
        this.orderService = orderServices
    }
    getAll = async (req: Request, res: Response) => {
        try {
            let orders = await orderServices.getAll()
            res.status(200).json(orders)
        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }

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
    update = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let order = await orderServices.update(id, req.body)
            res.status(200).json(order)
        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }

    }
    remove = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            await orderServices.remove(id)
            res.status(200).json({message: 'thành công'})
        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }
    }
}

export default new OrderController()