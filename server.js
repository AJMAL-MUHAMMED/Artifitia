
import express from 'express'
const app = express()
import cors from 'cors'
import todoRouter from './routes/todo.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()
const port = process.env.PORT || 3000;
import connectDB from './config/config.js'
connectDB()

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/todo', todoRouter)

app.listen(port, () => {
    console.log(`server is running on: ${port}`);
})
