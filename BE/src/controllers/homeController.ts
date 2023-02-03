import {Request, Response} from "express";
import homeServices from "../services/homeServices";

class HomeController {
    private homeServices


    constructor() {
        this.homeServices = homeServices;
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let home = await homeServices.getAll()
            res.status(200).json(home)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
    create = async (req: Request, res: Response) => {
        try {
            let newHome = await homeServices.save(req.body)
            res.status(200).json(newHome);
        } catch (e) {
            console.log(e.message)
            res.status(500).json(e.message)
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let home = {
                name: req.body.name,
                price : req.body.price,
                image : req.body.image,
                idUser : req.body.idUser,
                idCategory: req.body.idCategory
            }
            let editHome = await this.homeServices.update(id, home)
            res.status(200).json({ok: editHome, message: 'thanh cong'})
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    delete = async (req: Request, res: Response) => {
        let id = req.params.id;
        await this.homeServices.delete(id);
        res.status(200).json('Success!')

    }

}








//     findById = async (req: Request, res: Response) => {
//         let id = req.params.id
//         let findById = await this.homeServices.findById(id);
//         res.status(200).json(findById)
//     }
//
// }

export default new HomeController();
