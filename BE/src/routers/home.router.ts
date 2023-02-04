import {Router} from "express";
import homeController from "../controllers/homeController";
import {auth} from "../middleware/auth"
import {checkAdmin} from "../middleware/checkAdmin";
export const HomeRouter = Router();


// HomeRouter.use(auth);
HomeRouter.get('/',homeController.getAll);
HomeRouter.post('/',auth,homeController.create);
HomeRouter.put('/:id',auth,homeController.update);
HomeRouter.delete('/:id',auth,homeController.delete);
HomeRouter.get('/:id',auth,homeController.findById);


