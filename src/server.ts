import express, { Router } from 'express'
import { createServer } from 'http'
import { makeCreateDeployController } from './modules/deploy/factory/create-deploy-controller.factory'
import DocumentRoute from './modules/documents/infrastructure/api/document.routes'

/* Connect Azure */
import * as azdev from 'azure-devops-node-api'
import * as ba from 'azure-devops-node-api/BuildApi'
import * as bi from 'azure-devops-node-api/interfaces/BuildInterfaces'

const routes = Router()

routes.post('/deploy', makeCreateDeployController().handle)

const app = express()
app.use(express.json())
app.use(routes)

app.use('/documents', DocumentRoute)

const server = createServer(app)

server.listen(process.env.PORT || 3000, async () => {
  console.log('Server is running')
})

/* Azure Connection Implementation */

const orgUrl: string = process.env.AZURE_URL_ORGANIZATION!
const token = process.env.AZURE_PERSONAL_ACCESS_TOKEN!

const authHandler = azdev.getPersonalAccessTokenHandler(token)
const connection = new azdev.WebApi(orgUrl, authHandler)

async function run() {
  let build: ba.IBuildApi = await connection.getBuildApi()
  let project: string = process.env.AZURE_PROJECT!
  let defs: bi.DefinitionReference[] = await build.getDefinitions(project)

  defs.forEach((defRef: bi.DefinitionReference) => {
    console.log(`${defRef.name} (${defRef.id})`)
  })
}
