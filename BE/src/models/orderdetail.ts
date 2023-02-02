import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class OrderDetail{
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    idHome : number;
    @Column()
    idOrder : number;
}
