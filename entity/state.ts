import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm"

@Entity()
export class state2 extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    state: string;
}