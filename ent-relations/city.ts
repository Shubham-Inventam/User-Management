import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm"

@Entity('city')
export class city extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    city_id:number;

    @Column()
    city_name: string;

}