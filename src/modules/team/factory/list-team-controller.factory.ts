import TeamAzureGateway from "../gateway/team-azure.gateway"
import ListTeamController from "../presentation/list-team.controller"
import ListTeamUseCase from "../usecase/list/list-team.usecase"

export const makeListTeamController = () => {
  const teamAzureGateway = new TeamAzureGateway()
  const listTeamUseCase = new ListTeamUseCase(teamAzureGateway)
  return new ListTeamController(listTeamUseCase)
}