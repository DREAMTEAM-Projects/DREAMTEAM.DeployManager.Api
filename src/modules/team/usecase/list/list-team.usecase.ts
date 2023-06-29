import { TeamGateway } from "../../gateway/team.gateway";
import { ListTeamUseCaseInputDto, ListTeamUseCaseOutputDto } from "./list-team.usecase.dto";

export default class ListTeamUseCase {

  constructor(private readonly _teamGateway: TeamGateway) {}

  async execute(input: ListTeamUseCaseInputDto): Promise<ListTeamUseCaseOutputDto> {
    const teams = await this._teamGateway.list(input.projectName)
    return { teams: teams.map(team => team.description) }
  }

}