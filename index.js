const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3001
app.use(cors())

app.get('/auth/hello', (_req, res) => {
    res.send('<h1>Hello world???</h1>')
});

app.listen(PORT, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log(`Sever at http://localhost:${PORT}`)
})