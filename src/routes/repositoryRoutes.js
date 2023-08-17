import { Router } from "express";

import RepositoryController from "../controllers/RepositoryController";

const routes = Router();

routes.get('/users/:user_id/repository', RepositoryController.index )
routes.post('/users/:user_id/repository', RepositoryController.createRepo )
routes.delete('/users/:user_id/repository', RepositoryController.createRepo )



export default routes;