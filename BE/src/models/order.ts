import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    idHome : number;
    @Column()
    idUser : number;
    @Column()
    totalPrice : number;
    @Column({type: "datetime"})
    startTime : string;
    @Column()
    endTime : string;
    @Column()
    status : string;
}
