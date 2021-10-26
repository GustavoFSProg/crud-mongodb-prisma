import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './routes'

dotenv.config()

const { PORT } = process.env

const api = express()

api.use(express.json())
api.use(cors())
api.use(route)

api.listen(PORT, () => {
  console.log(`Entrou na API on Port: ${PORT}`)
})

export default api
