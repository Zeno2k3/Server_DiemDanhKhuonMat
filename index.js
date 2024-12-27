const express = require('express')
const cors = require('cors')
const authRouter = require('./src/routes/authRouter')
const connectDB = require('./src/config/connect')
const app = express()

const PORT = 3001
app.use(cors())
app.use(express.json())
app.use('/auth', authRouter)

connectDB();



app.listen(PORT, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log(`Sever at http://localhost:${PORT}`)
})