require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { createCouser } from './routes';
// import { router } from './routes';

class Server {
  private app: express.Application

  constructor() {
    this.app = express();
    this.configuration();
    this.middlewares();
    this.routes();
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 3333);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    // this.app.use(router);
    this.app.get('/', createCouser);
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening http://localhost:${this.app.get('port')} 🚀`)
    });
  }
}

export {
  Server
}
