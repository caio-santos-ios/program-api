import express, { Application, json } from "express";
import { userRouter } from "./routers/user.router";
import { postRouter } from "./routers/post.router";
import { biosRouter } from "./routers/bios.router";

const app: Application = express()

app.use(json())

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/bios', biosRouter)

export { app }