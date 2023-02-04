import {Router} from "express";
import {HomeRouter} from "./home.router";
import {userRouter} from "./user.router";
import {categoryRouter} from "./category.router";
import {orderRouter} from "./order.router";
export const router = Router();
router.use('/home',HomeRouter);
router.use('/auth',userRouter);
router.use('/categories',categoryRouter)
router.use('/order',orderRouter)

