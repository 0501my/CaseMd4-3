declare class CategoryController {
    private categoryServices;
    constructor();
    getAll: (req: Request, res: Respone) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
