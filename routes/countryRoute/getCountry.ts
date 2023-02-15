import {Request, Response} from 'express'
import { country2 } from '../../entity/country'

let getCountry = async (req: Request, resp:Response) => {
    let id:any = req.params.id
    const getData = await country2.findOneBy({id:id})
    resp.json({message:getData})
    console.log(getData);
        // resp.json({
        //     test:'User Retrieved Successfully'
        // })


}

export default getCountry