import {Router} from "express";
import homeController from "../controllers/homeController";
import {auth} from "../middleware/auth"
import {checkAdmin} from "../middleware/checkAdmin";
export const HomeRouter = Router();


HomeRouter.use(auth);
HomeRouter.get('/',homeController.getAll);
HomeRouter.post('/',homeController.create);
HomeRouter.put('/:id',homeController.update);
HomeRouter.delete('/:id',homeController.delete);
HomeRouter.get('/:id',homeController.findById);


