import express from 'express'
import cors from 'cors'

import userRoutes from './routes/userRoutes';
import repositoryRoutes from './routes/repositoryRoutes'

//database
import './database/index'

class App {
    constructor(){
        this.server = express();
        this.middleware();
        this.router();
    }

    middleware(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    router(){
     this.server.use(userRoutes)
     this.server.use(repositoryRoutes)
    }
}

export default new App().server