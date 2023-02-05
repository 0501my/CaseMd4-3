declare class OrderDetailServices {
    private orderDetailRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (orderDetail: any) => Promise<any>;
    update: (id: any, newOrderDetail: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
}
declare const _default: OrderDetailServices;
export default _default;
