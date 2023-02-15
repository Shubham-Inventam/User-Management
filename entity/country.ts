import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm"

@Entity()
export class country2 extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    country: string;
}