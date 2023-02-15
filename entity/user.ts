import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm"

@Entity()
export class user2 extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    phone: string;
}