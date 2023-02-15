import {Request, Response} from 'express'
import { city } from '../../ent-relations/city'


let createCity = async (req: Request, resp:Response) => {

    const createData = await city.insert({
        city_name: "Amravati"
    })
        resp.json({
            test:'DATA added successfully'
        })
}

export default createCity