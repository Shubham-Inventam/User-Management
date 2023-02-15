import {Request, Response} from 'express'
import { state } from '../../ent-relations/state'
import { state2 } from '../../entity/state'


let createState = async (req: Request, resp:Response) => {

    const createData = await state.insert({
        state_name: "Maharashtra"
    })
        resp.json({
            test:'DATA added successfully'
        })
}

export default createState