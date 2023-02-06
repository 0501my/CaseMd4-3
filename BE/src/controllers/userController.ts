import {Request, Response} from "express";
import userService from "../services/UserService";
// import homeService from "../services/homeServices";
// import orderService from "../services/orderService";

class ProductController {
    private userService;
    private orderService;
    private productService;

    constructor() {
        // this.orderService = orderService;
        this.userService = userService;
        // this.productService = homeService;
    }

    register = async (req: Request, res: Response) => {
        let user = await this.userService.register(req.body);
        res.status(201).json(user)
    }

    login = async (req: Request, res: Response) => {
        let response = await this.userService.checkUser(req.body);
        res.status(200).json(response)
    }
    changePassword = async (req: Request, res: Response) => {
        try {
            let user = await this.userService.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword)
            if (!user.check) {
                res.json({
                    user,
                    mess: "Old Password Is Not Correct"
                })
            } else {
                res.json({
                    user,
                    mess: "Change Password Successfully"
                })
            }
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }




}
export default new ProductController();
