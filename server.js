
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 3000;
const connectDB = require('./config/config')
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api/todo', require('./routes/todo'))

app.listen(port, () => {
    console.log(`seever is running on: ${port}`);
})
