import {OneToOne, Column,JoinTable,JoinColumn, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Brand } from "./brand";
@Entity()
export class Car{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:"varchar"})
    name:string;
    @Column({type:"varchar"})
    code:string;
    @Column({type:"int"})
    price:number;

    @ManyToOne(()=>Brand,(brand)=> brand.cars)
    brand:Brand; 

    @Column({type:"varchar"})
    description: string;
}