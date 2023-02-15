import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm"
import { user } from "./user";

@Entity('country')
export class country extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    country_id:number;

    @Column()
    country_name: string;

}