import {Router} from "express";
import {HomeRouter} from "./home.router";
// import {UserRouter} from "./user.router";
// import {categoryRouter} from "./category.router";
export const router = Router();
router.use('/home',HomeRouter);
// router.use('/auth',UserRouter);
// router.use('/categories',categoryRouter)

