import { Request } from 'express';
import { Request, Response } from 'express';
declare class CategoryController {
    private categoryServices;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
