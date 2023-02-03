declare class HomeService {
    private homeRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (product: any) => Promise<any>;
}
declare const _default: HomeService;
export default _default;
