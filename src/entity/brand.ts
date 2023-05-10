import {OneToOne, Column,JoinTable,JoinColumn, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import { Car } from "./car"; 
@Entity()
 export class Brand{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type: "varchar"})
    name:string;
    @OneToMany(()=> Car ,(car)=> car.brand)
    cars: Car
 }

 