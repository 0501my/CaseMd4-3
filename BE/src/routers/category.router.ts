
import {Router} from "express";
import categoryController from "../controllers/categoryController";
export const categoryRouter = Router();
categoryRouter.get('/',categoryController.getAll);
