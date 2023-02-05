import {Request, Response} from "express";
import orderDetailService from "../services/orderDetailService";
import orderServices from "../services/orderServices";
  class OrderDetailController{
      private orderDetailService
      constructor() {
          this.orderDetailService = orderDetailService
      }
      getAll = async (req: Request, res: Response) => {
          try {
              let orders = await orderDetailService.getAll()
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
              let order = await orderDetailService.save(req.body)
              res.status(200).json(order)

          } catch (e) {
              res.status(500).json({
                      message: e.message
                  }
              )
          }
      }
}
export default new OrderDetailController