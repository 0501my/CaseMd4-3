import {Router} from "express";
import orderController from "../controllers/orderController"
export const orderRouter = Router();
// router.get('/order',orderController.)
orderRouter.post('/order', orderController.create)
// router.put('/order',orderController.)
// router.delete('/order',orderController.)