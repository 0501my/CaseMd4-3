import {Router} from "express";
import orderController from "../controllers/orderController"
export const orderRouter = Router();
orderRouter.get('/',orderController.getAll)
orderRouter.post('/',orderController.create)
orderRouter.put('/:id',orderController.update)
orderRouter.delete('/:id',orderController.remove)