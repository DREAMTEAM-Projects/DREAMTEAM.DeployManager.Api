import { createServer } from "http"
import express, { Router } from 'express'
import { makeCreateDeployController } from "./modules/deploy/factory/create-deploy-controller.factory";

const routes = Router();

routes.post('/deploy', makeCreateDeployController().handle);

const app = express()
app.use(express.json())
app.use(routes)

const server = createServer(app)

server.listen(process.env.PORT || 3000, async () => {
  console.log('Server is running')
})