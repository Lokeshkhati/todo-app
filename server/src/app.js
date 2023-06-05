import express from 'express';
import { config } from "dotenv"
const app = express()
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'
import user from './routes/user.js'
import todo from './routes/todo.js'

config()
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// cookie middleware
app.use(cookieParser())

// router middleware
app.use('/api/v1', user)
app.use('/api/v1', todo)

export default app