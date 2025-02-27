import express from "express"
import cors from "cors"
import cookiParser from "cookie-parser"

const app = express

app.request(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("Public"))
app.use(cookiParser())


//routes import
import userRouter from './routes/user.routes.js'

//routes declarartion
app.use("/api/v1/users", userRouter)

//----------> https://localhost:8000/api/v1/users/register
//----------> https://localhost:8000/api/v1/users/login

export { app }