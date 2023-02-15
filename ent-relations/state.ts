import {Entity, Column, PrimaryGeneratedColumn,  OneToOne, JoinColumn, BaseEntity} from "typeorm"
import { user } from "./user";


@Entity('state')
export class state extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    state_id:number;

    @Column()
    state_name: string;

}