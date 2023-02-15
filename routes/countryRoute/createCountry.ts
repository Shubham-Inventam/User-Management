import {Request, Response} from 'express'
import { country } from '../../ent-relations/country'
import { country2 } from '../../entity/country'


let createCountry = async (req: Request, resp:Response) => {

    const createData = await country.insert({
        country_name: "India"
    })
        resp.json({
            test:'DATA added successfully'
        })
}

export default createCountry