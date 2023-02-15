import {Request, Response} from 'express'
import { city2 } from '../../entity/city'

let getCity = async (req: Request, resp:Response) => {
    let id:any = req.params.id
    const getData = await (city2 as any).findOneBy({id:id})
    resp.json({message:getData})
    console.log(getData);
        // resp.json({
        //     test:'User Retrieved Successfully'
        // })


}

export default getCity