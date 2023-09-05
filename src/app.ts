import express, { Application, json } from "express";
import cors from 'cors';
import { userRouter } from "./routers/user.router";
import { biosRouter } from "./routers/bios.router";
import { sessionRouter } from "./routers/session.router";
import { handleError } from "./middlewares/handleError.middleware";

const app: Application = express()

app.use(json())
app.use(cors())
app.use('/users', userRouter)
app.use('/bios', biosRouter)
app.use('/login', sessionRouter)

app.use(handleError)

export { app }