import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm"

@Entity()
export class city2 extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    city_name: string;
}