import {Request, Response} from 'express'
import { state2 } from '../../entity/state'

let getState = async (req: Request, resp:Response) => {
    let id:any = req.params.id
    const getData = await state2.findOneBy({id:id})
    resp.json({message:getData})
    console.log(getData);
        // resp.json({
        //     test:'User Retrieved Successfully'
        // })


}

export default getState