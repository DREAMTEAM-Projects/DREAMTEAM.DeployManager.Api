import express, { Router } from 'express';
import { createServer } from "http";
import { makeCreateDeployController } from "./modules/deploy/factory/create-deploy-controller.factory";
import DocumentRoute from './modules/documents/infrastructure/api/document.routes';
const routes = Router();

routes.post('/deploy', makeCreateDeployController().handle);

const app = express()
app.use(express.json())
app.use(routes)

app.use('/documents', DocumentRoute)

const server = createServer(app)

server.listen(process.env.PORT || 3000, async () => {
  console.log('Server is running')
})