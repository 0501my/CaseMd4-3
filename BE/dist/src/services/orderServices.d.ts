declare class OrderServices {
    private orderRepository;
    constructor();
    getAll: () => Promise<void>;
    save: (order: any) => Promise<any>;
    update: () => Promise<void>;
    remove: () => Promise<void>;
    findById: () => Promise<void>;
}
declare const _default: OrderServices;
export default _default;
