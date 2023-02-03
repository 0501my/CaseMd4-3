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
}
//

//
//
//     }
//     create = async (req: Request, res: Response) => {
//         try {
//             let newHome = await homeServices.save(req.body)
//             res.status(200).json(newHome);
//         } catch (e) {
//             res.status(500).json(e.message)
//         }
//     }
//     update = async (req: Request, res: Response) => {
//         try {
//             let id = req.params.id;
//             let editHome = await this.homeServices.update(id, req.body)
//             res.status(200).json({ok: editHome, message: 'thanh cong'})
//         } catch (e) {
//             res.status(500).json(e.message)
//         }
//     }
//     remove = async (req: Request, res: Response) => {
//         try {
//             let id = req.params.id;
//             let removeHome = await this.homeServices.remove(id)
//             res.status(200).json({ok: removeHome, message: 'xoa roi'})
//         } catch (e) {
//             res.status(500).json(e.message)
//         }
//     }
//     findById = async (req: Request, res: Response) => {
//         let id = req.params.id
//         let findById = await this.homeServices.findById(id);
//         res.status(200).json(findById)
//     }
//
// }

export default new HomeController();
