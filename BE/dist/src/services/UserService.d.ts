declare class UserService {
    private userRepository;
    constructor();
    getAll: () => Promise<any>;
    checkUser: (user: any) => Promise<"Username is not exit" | "Password is wrong" | {
        idUser: any;
        username: any;
        role: any;
        token: string;
    }>;
    register: (user: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
