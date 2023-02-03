import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class Home{
    @PrimaryGeneratedColumn()
    id : number;
    @Column({type : "varchar", length : 255})
    name : string;
    @Column({type : "text"})
    image : string;
    @Column({type : "int"})
    price : number;
    @Column({default : 1})
    idUser : number;
    @Column({type : "int" , default : 1})
    idCategory : number;

}

