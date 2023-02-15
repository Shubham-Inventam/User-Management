import {Request,Response} from 'express'
import { user } from '../../ent-relations/user'

export const updateUser = async (req: Request, res: Response) =>{
    try{
        let user_id:any = req.params.id
        const userData = await user.findOneBy({user_id:user_id})
    if (!userData){
        return res.status(400).send({message:"User not found with this id"})
    }
    userData.fname = req.body.fname
    userData.lname = req.body.lname
    userData.phone = req.body.phone

    const updatedUser = await user.save(userData)
    
    return res.status(200).send({message:"User data updated successfully", updatedUser})
    }catch(err){
        return res.status(400).send({message:"Something went wrong", err})
    }
}

export default updateUser