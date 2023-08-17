import User from "../model/User";
import Repository from "../model/Repository";

class RepositoryController {
    async index(req, res) {
        try {
            const { user_id } = req.params;
            const user = await User.findById(user_id);
            if (!user) {
                return res.status(404).json()
            }
            const repositories = await Repository.find({
                userId: user_id
            })
            return res.json(repositories)
        } catch (error) {
            return res.status(500).json(error, 'Server Error internal')
        }
    }
    async createRepo(req, res) {
        try {
            const { user_id } = req.params;
            const { name, url } = req.body;
            const user = await User.findById(user_id);
            if (!user) {
                return res.status(404).json()
            }

            const repository = await Repository.findOne({
                name,
                userId: user_id
            })
            if (repository) {
                return res.status(422).json({message: `Repository ${name} alrady exist`})
            }
            const newRepository = await Repository.create({
                name,
                url,
                userId: user_id
            })

            return res.status(200).json(newRepository)
        } catch (error) {
            return res.status(500).json(error, 'Server Error internal')

        }
    }

    async destroyRepo ( req,res){
        try {
            const {user_id, id} = req.params;
            const user = await User.findById(user_id);
            if (!user) {
                return res.status(400).json({message: `User not exist`})
            }
            const repository = await Repository.findOne({
                userId: user_id,
                id 
            })
            if (!repository) {
                return res.status(400).json({message: `Repository not exist`})
            }
            await repository.deleteOne();
            return res.status(200).json()


        } catch (error) {
            
        }
    }
}

export default new RepositoryController()