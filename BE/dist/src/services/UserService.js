"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class UserService {
    constructor() {
        this.getAll = async () => {
            let users = await this.userRepository.find();
            return users;
        };
        this.checkUser = async (user) => {
            let userCheck = await this.userRepository.findOneBy({ username: user.username });
            if (!userCheck) {
                return 'Username is not exit';
            }
            else {
                let passwordCompare = await bcrypt_1.default.compare(user.password, userCheck.password);
                if (!passwordCompare) {
                    return 'Password is wrong';
                }
                else {
                    let payload = {
                        idUser: userCheck.id,
                        username: userCheck.username,
                        role: userCheck.role
                    };
                    let check = {
                        idUser: userCheck.id,
                        username: userCheck.username,
                        role: userCheck.role,
                        token: jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                            expiresIn: 3000000
                        })
                    };
                    return check;
                }
            }
        };
        this.register = async (user) => {
            let userCheck = await this.userRepository.findOneBy({ username: user.username });
            if (!userCheck) {
                user.password = await bcrypt_1.default.hash(user.password, 10);
                return this.userRepository.save(user);
            }
            return 'Username registered';
        };
        this.checkChangePassword = async (idUser, oldPassword, newPassword) => {
            let user = {
                check: false,
                userFind: []
            };
            let userFind = await this.userRepository.findBy({ id: idUser });
            if (userFind.length === 0) {
                user.check = false;
            }
            else {
                let compare = await bcrypt_1.default.compare(oldPassword, userFind[0].password);
                if (!compare) {
                    user.userFind = userFind;
                    user.check = false;
                }
                if (compare) {
                    newPassword = await bcrypt_1.default.hash(newPassword, 10);
                    await this.userRepository.update({ id: idUser }, { password: newPassword });
                    user.check = true;
                    user.userFind = userFind;
                }
            }
            return user;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map