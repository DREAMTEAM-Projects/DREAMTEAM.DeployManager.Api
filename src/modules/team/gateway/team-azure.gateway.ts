import { TeamGateway } from "./team.gateway";
import * as azdev from 'azure-devops-node-api'
import Team from "../domain/entity/team.entity";

export default class TeamAzureGateway implements TeamGateway {
  private _connection: azdev.WebApi

  constructor() {
    const orgUrl: string = process.env.AZURE_URL_ORGANIZATION!
    const token = process.env.AZURE_PERSONAL_ACCESS_TOKEN!
    const authHandler = azdev.getPersonalAccessTokenHandler(token)
    this._connection = new azdev.WebApi(orgUrl, authHandler)
  }

  async list(projectName: string): Promise<Team[]> {
    const project: string = projectName
    const coreClient = await this._connection.getCoreApi()
    const teams = await coreClient.getTeams(project)
    return teams?.map(team => new Team(team.name as string)) ?? []
  }
}