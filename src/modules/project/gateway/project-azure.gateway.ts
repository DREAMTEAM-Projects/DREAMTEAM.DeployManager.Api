import { ProjectGateway } from "./project.gateway";
import * as azdev from 'azure-devops-node-api'
import Project from "../domain/entity/project.entity";

export default class ProjectAzureGateway implements ProjectGateway {
  private _connection: azdev.WebApi

  constructor() {
    const orgUrl: string = process.env.AZURE_URL_ORGANIZATION!
    const token = process.env.AZURE_PERSONAL_ACCESS_TOKEN!
    const authHandler = azdev.getPersonalAccessTokenHandler(token)
    this._connection = new azdev.WebApi(orgUrl, authHandler)
  }

  async list(): Promise<Project[]> {
    const coreClient = await this._connection.getCoreApi()
    const projects = await coreClient.getProjects()
    return projects?.map(project => new Project(project.name as string)) ?? []
  }
}