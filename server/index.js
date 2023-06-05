
import { config } from "dotenv"
import app from "./src/app.js"
import { connectWithDB } from './src/config/db.js'

config()
connectWithDB()

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`)
})
