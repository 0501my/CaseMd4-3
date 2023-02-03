
import {AppDataSource} from "../data-source";
import {Home} from "../models/home";

class HomeServices {
    private homeRepository;

    constructor() {
        this.homeRepository = AppDataSource.getRepository(Home)
    }

    getAll = async () => {
        let sql = ``
        let products = await this.homeRepository.query(sql)
        return products;
    }
    save = async (home) => {
        return this.homeRepository.save(home);
    }
    private update = async (id, newHome) => {
        let home = await this.homeRepository.findOneBy({id: id});
        if (!home) {
            return null;
        }
        return this.homeRepository.update({id: id}, newHome);
    }
    private findById = async (id) => {
        let home = await this.homeRepository.findOneBy({id: id});
        if (!home) {
            return null;
        }
        return home;
    }
    private remove = async (id) => {
        let home = await this.homeRepository.findOneBy({id: id});
        if (!home) {
            return null;
        }
        return this.homeRepository.delete({id: id})
    }
}

export default new HomeServices();
