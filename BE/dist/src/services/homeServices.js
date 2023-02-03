"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = require("../models/home");
const data_source_1 = require("../data-source");
class HomeService {
    constructor() {
        this.getAll = async () => {
            let sql = 'select u.username,p.id, p.name, p.price, p.image, c.id as idCategory, c.name as nameCategory from home p join category c on p.idcategory = c.id join user u on p.idUser =  u.id ';
            let home = await this.homeRepository.query(sql);
            return home;
        };
        this.save = async (product) => {
            return this.homeRepository.save(product);
        };
        this.homeRepository = data_source_1.AppDataSource.getRepository(home_1.Home);
    }
}
exports.default = new HomeService();
//# sourceMappingURL=homeServices.js.map