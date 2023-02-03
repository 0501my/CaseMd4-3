declare class HomeService {
    private homeRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (home: any) => Promise<any>;
    update: (id: any, newHome: any) => Promise<any>;
    private delete;
    private findById;
    findByUsername: (username: any) => Promise<any>;
}
declare const _default: HomeService;
export default _default;
