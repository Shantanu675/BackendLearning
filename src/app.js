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

export { app }