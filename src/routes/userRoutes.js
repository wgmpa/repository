import { Router } from "express";
import userController from "../controllers/userController";
const routes = new Router()

routes.get('/users',userController.index)
routes.post('/users',userController.cadUser)
routes.put('/users/:id',userController.updatedUser)
routes.delete('/users/:id',userController.delete)



export default routes;