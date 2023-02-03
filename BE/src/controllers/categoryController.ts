import {Request, Response} from 'express';
import categoryServices from "../services/categoryServices";

class CategoryController {
    private categoryServices

    constructor() {
        this.categoryServices = categoryServices;
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let category = await categoryServices.getAll()
            res.status(200).json(category)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
}
export default new CategoryController()
