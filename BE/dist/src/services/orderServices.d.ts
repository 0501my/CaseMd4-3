declare class OrderServices {
    private orderRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (order: any) => Promise<any>;
    update: (id: any, newOrder: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: OrderServices;
export default _default;
