"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryServices_1 = __importDefault(require("../services/categoryServices"));
class CategoryController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let category = await categoryServices_1.default.getAll();
                res.status(200).json(category);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.categoryServices = categoryServices_1.default;
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map