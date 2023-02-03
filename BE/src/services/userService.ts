import {User} from "../models/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";

class UserService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }
    getAll = async () => {
        let users = await this.userRepository.find();
        return users ;
    }


    checkUser = async (user) => {
        let userCheck = await this.userRepository.findOneBy({username: user.username})
        if (!userCheck) {
            return 'Username is not exit';
        }else {
            let passwordCompare = bcrypt.compare(user.password, userCheck.password);
            if (!passwordCompare){
                return 'Password is wrong'
            }else {
                let payload = {
                    idUser: userCheck.id,
                    username:userCheck.username,
                    role: userCheck.role

                }
                let check = {
                    idUser: userCheck.id,
                    username:userCheck.username,
                    role: userCheck.role,
                    token: await jwt.sign(payload, SECRET, {
                        expiresIn: 3000000
                    })
                }
                return check
            }
        }

    }

    save = async (user) => {      // product này vẫn chưa có id
        return this.userRepository.save(user); //khởi tạo đã có id
    }


    register = async (user) =>{
        let userCheck = await this.userRepository.findOneBy({username: user.username})
        if (!userCheck) {
            user.password = await bcrypt.hash(user.password,10);
            return this.userRepository.save(user);
        }
        return 'Username registered';
    }

}
export default new UserService();