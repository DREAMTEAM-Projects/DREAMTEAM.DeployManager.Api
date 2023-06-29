import express from 'express'
import { createServer } from 'http'
import DocumentRoute from './modules/documents/infrastructure/api/document.routes'
import routerConfig from './modules/@shared/config/router-config'

/* Connect Azure */
import * as azdev from 'azure-devops-node-api'
import * as ba from 'azure-devops-node-api/BuildApi'
import * as bi from 'azure-devops-node-api/interfaces/BuildInterfaces'

const app = express()
app.use(express.json())
routerConfig(app)

const server = createServer(app)

server.listen(process.env.PORT || 3000, async () => {
  console.log(`Server is running on port ${process.env.PORT}`)
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
