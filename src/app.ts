import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser';
import user from './controller/user.controller'

const app = express()

app.use(bodyParser.json())

app.use('/user', user)

app.use((error, req: Request, res: Response, next: NextFunction) => res.status(500).send(error.message))

export default app;
