import { Router } from "express";
import userController from "../controllers/userController";
import SessionController from "../controllers/SessionController";
import auth from "../middlewares/auth";

const routes = new Router()


routes.post('/sessions',SessionController.create)
routes.use(auth)

routes.get('/users',userController.index)
routes.get('/users/:id',userController.showUser)
routes.put('/users/:id',userController.updatedUser)
routes.delete('/users/:id',userController.delUser)
routes.post('/users',userController.cadUser)



export default routes;