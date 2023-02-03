declare class HomeServices {
    private homeRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (home: any) => Promise<any>;
    private update;
    private findById;
    private remove;
}
declare const _default: HomeServices;
export default _default;
