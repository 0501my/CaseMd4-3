"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = require("../models/home");
const data_source_1 = require("../data-source");
class HomeService {
    constructor() {
        this.getAll = async () => {
            let sql = 'select u.username,p.id, p.name,p.idUser, p.price, p.image, c.id as idCategory, c.name as nameCategory from home p join category c on p.idcategory = c.id join user u on p.idUser =  u.id ';
            let home = await this.homeRepository.query(sql);
            return home;
        };
        this.save = async (home) => {
            return this.homeRepository.save(home);
        };
        this.update = async (id, newHome) => {
            let home = await this.homeRepository.findOneBy({ id: id });
            if (!home) {
                return null;
            }
            newHome.id = id;
            return this.homeRepository.update({ id: id }, newHome);
        };
        this.delete = async (id) => {
            let home = await this.homeRepository.findOneBy({ id: id });
            if (!home) {
                return null;
            }
            else {
                return this.homeRepository.delete({ id: id });
            }
        };
        this.findById = async (id) => {
            let home = await this.homeRepository.findOneBy({ id: id });
            if (!home) {
                return null;
            }
            else {
                return home;
            }
        };
        this.findByName = async (search) => {
            let sql = `select u.username,p.id, p.name,p.idUser, p.price, p.image, c.id as idCategory, c.name as nameCategory from home p join category c on p.idcategory = c.id join user u on p.idUser =  u.id  where p.name like '%${search}%'`;
            let home = await this.homeRepository.query(sql);
            if (!home) {
                return null;
            }
            else {
                return home;
            }
        };
        this.homeRepository = data_source_1.AppDataSource.getRepository(home_1.Home);
    }
}
exports.default = new HomeService();
//# sourceMappingURL=homeServices.js.map