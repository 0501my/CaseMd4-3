"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homeServices_1 = __importDefault(require("../services/homeServices"));
class HomeController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let home = await homeServices_1.default.getAll();
                res.status(200).json(home);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            try {
                let newHome = await homeServices_1.default.save(req.body);
                res.status(200).json(newHome);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.update = async (req, res) => {
            try {
                let id = req.params.id;
                let home = {
                    name: req.body.name,
                    image: req.body.image,
                    price: req.body.price,
                    idUser: req.body.idUser,
                    idCategory: req.body.idCategory
                };
                let editHome = await this.homeServices.update(id, home);
                res.status(200).json({ ok: editHome, message: 'thanh cong' });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await this.homeServices.delete(id);
            res.status(200).json('Success!');
        };
        this.findById = async (req, res) => {
            let id = req.params.id;
            let findById = await this.homeServices.findById(id);
            await res.status(200).json(findById);
        };
        this.homeServices = homeServices_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=homeController.js.map