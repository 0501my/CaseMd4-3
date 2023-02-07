declare class ProductController {
    private userService;
    private orderService;
    private productService;
    constructor();
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    changePassword: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
