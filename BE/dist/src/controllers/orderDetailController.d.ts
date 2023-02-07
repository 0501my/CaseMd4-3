declare class OrderDetailController {
    private orderDetailService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<void>;
}
declare const _default: OrderDetailController;
export default _default;
