import express, { json, urlencoded } from 'express'
import cors from 'cors'
import dbConnection from './database.js'
import userRoute from './routes/userRoute.js'
import "dotenv/config.js";



const app = express()
const PORT = 3001

// Connect to the database
dbConnection()

// Handle CORS issues
app.use(cors())

// Request payload middleware
app.use(json())
app.use(urlencoded({ extended: true }))

// Handle custom routes
app.use('/api', userRoute)


app.get('/', (req, res) => {
    res.send('Connected to the server !')
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})