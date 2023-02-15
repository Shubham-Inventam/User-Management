import {Request, Response} from 'express'
import { user } from '../../ent-relations/user'

let getUser = async (req: Request, resp:Response) => {
    let user_id:any = req.params.id
    const getData = await user.findOneBy({user_id:user_id})
    resp.json({message:getData})
    console.log(getData);
        // resp.json({
        //     test:'User Retrieved Successfully'
        // })
}

export default getUser