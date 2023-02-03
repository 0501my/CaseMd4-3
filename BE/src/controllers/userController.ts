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


    // list =  async (req: Request, res: Response) => {
    //     let id = req.params.id;
    //     let newHome = await this.homeService.findByID(id)
    //     // console.log(newHome)
    //     // @ts-ignore
    //     let user = req.session.User;
    //     console.log()
    //     newHome.user.username = user.username;
    //     await this.homeService.update(id,newHome);
    //     let homes= await homeService.findByUsername(user);
    //     res.render('users/myHomeList', {homes: homes, user:user});
    // }

}
export default new ProductController();