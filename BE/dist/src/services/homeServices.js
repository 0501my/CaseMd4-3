"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const home_1 = require("../models/home");
class HomeServices {
    constructor() {
        this.getAll = async () => {
            let sql = ``;
            let products = await this.homeRepository.query(sql);
            return products;
        };
        this.save = async (home) => {
            return this.homeRepository.save(home);
        };
        this.update = async (id, newHome) => {
            let home = await this.homeRepository.findOneBy({ id: id });
            if (!home) {
                return null;
            }
            return this.homeRepository.update({ id: id }, newHome);
        };
        this.findById = async (id) => {
            let home = await this.homeRepository.findOneBy({ id: id });
            if (!home) {
                return null;
            }
            return home;
        };
        this.remove = async (id) => {
            let home = await this.homeRepository.findOneBy({ id: id });
            if (!home) {
                return null;
            }
            return this.homeRepository.delete({ id: id });
        };
        this.homeRepository = data_source_1.AppDataSource.getRepository(home_1.Home);
    }
}
exports.default = new HomeServices();
//# sourceMappingURL=homeServices.js.map