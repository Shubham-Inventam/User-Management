import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm"
import { city } from "./city";
import { country } from "./country";
import { state } from "./state";

@Entity("user")
export class user extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    user_id:Number;

    @Column()
    fname: string;

    @Column()
    lname: string;

    @Column()
    phone: string;

    @OneToOne(()=>city,(city)=>city.city_id)
    @JoinColumn({name:"city_id"})
    city_id: city;

    @OneToOne(()=>state,(state)=>state.state_id)
    @JoinColumn({name:"state_id"})
    state_id: state;

    @OneToOne(()=>country,(country)=>country.country_id)
    @JoinColumn({name:"country_id"})
    country_id: country;

}