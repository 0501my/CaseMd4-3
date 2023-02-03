import {Home} from "../models/home";

import {AppDataSource} from "../data-source";
//
class HomeService {
    private homeRepository;

    constructor() {
        this.homeRepository = AppDataSource.getRepository(Home);
    }

    getAll = async () => {
        let sql = 'select u.username,p.id, p.name, p.price, p.image, c.id as idCategory, c.name as nameCategory from home p join category c on p.idcategory = c.id join user u on p.idUser =  u.id '
        let home = await this.homeRepository.query(sql);
        return home;
    }

    save = async (product) => {
        return this.homeRepository.save(product);
    }

}


//
//     private update = async (id,newHome) => {
//         let home = await this.homeRepository.findOneBy({id: id});
//         if (!home) {
//             return null;
//         }
//         newHome.id = id;
//         return this.homeRepository.update({id: id}, newHome);
//     }
//     // Tìm bằng ID
//     private findByID = async (id) => {
//         let home = await this.homeRepository.findOneBy({id: id});  //findOne là tìm ra một thằng
//         if (!home){
//             return null;
//         }else {
//             return home;
//         }
//     }
//
//     private delete= async (id) => {
//         let home = await this.homeRepository.findOneBy({id: id});  //findOne là tìm ra một thằng
//         if (!home){
//             return null;
//         }else {
//             return this.homeRepository.delete({id: id});
//         }
//     }
//
//     findByName = async (search)=>{
//         let sql = `select p.id, p.name, p.price, p.image, c.idCategory, c.name as nameCategory from home p join category c on p.category = c.id where p.name like '%${search}%'`
//         let home = await this.homeRepository.query(sql)
//         if (!home){
//             return null
//         }else {
//             return home;
//         }
//     }
//
//     findByUsername= async (username)=>{
//         let home = await this.homeRepository.findOneBy({username: username})
//         if (!home){
//             return null;
//         }
//         return home;
//     }
//
// }
//
export default new HomeService();