import User from "../model/User"
import { createHashPassword } from "../service/auth"

class UserController{
    async index (req,res){
        try {
            const users = await User.find()
            !users ? res.status(500).json('Nenhum usuários cadastrado') : res.json(users)
        } catch (error) {
            return res.status(500).json(error,'Server Error internal')
        }
    }

    async cadUser (req,res){
        try {
            
            const {email,password} = req.body
            const user = await User.findOne({email})
            if (user) {
            return res.json('Usuário já cadastrado')
            
            }
            //criptografia
            const encript= await createHashPassword(password)
             
            const newUser = await User.create({
                email, password:encript
            })
            return res.status(200).json(newUser)


        } catch (error) {
            return res.status(500).json(error,'Server Error internal')

        }
    }

    async showUser (req,res){
        try {
            const {id} = req.params;
            const {email, password} = req.body;
            const user = await User.findById(id);

            if (!user) {
            return res.json('Usuário inexistente');
            }
            return res.status(200).json(user)

        } catch (error) {
            return res.status(500).json(error,'Server Error internal')
        }
    }

    async updatedUser (req,res){
        try {
            const {id} = req.params;
            const {email,password} = req.body;
            const user = await User.findById(id);
            if (!user) {
            return res.json('Usuário inexistente');
            
            }
            await user.updateOne({ email, password })
            return res.status(200).json(user);

        } catch (error) {
            return res.status(500).json(error,'Server Error internal')
        }
    }

    async delUser (req,res){
      try {
        const {id} = req.params

        const userDelete = await User.findById(id)
        if (!userDelete) {
            return res.status(500).json('Usuário não encontrado')
        }
        await userDelete.deleteOne()
        return res.json(userDelete)
      } catch (error) {
        return res.status(500).json(error,'Server Error internal')
      }
    }
}


export default new  UserController()