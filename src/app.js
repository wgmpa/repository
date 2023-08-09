import express from 'express'
import cors from 'cors'

import userRoutes from './routes/userRoutes';

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
    }
}

export default new App().server