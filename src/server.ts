import cors from 'cors'
import express from 'express'
import { createServer } from 'http'
import routerConfig from './modules/@shared/config/router-config'

const app = express()
app.use(express.json())
app.use(cors())
routerConfig(app)

const server = createServer(app)

server.listen(process.env.PORT || 3000, async () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
