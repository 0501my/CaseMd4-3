import {Router} from "express";
import orderDetailController from "../controllers/orderDetailController"
export const orderDetailRouter = Router();
orderDetailRouter.get('/',orderDetailController.getAll)
orderDetailRouter.post('/',orderDetailController.create)
// orderDetailRouter.put('/:id',orderDetailController.update)
orderDetailRouter.delete('/:id',orderDetailController.remove)
