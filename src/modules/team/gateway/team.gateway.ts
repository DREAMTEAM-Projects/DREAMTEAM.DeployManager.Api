import Team from "../domain/entity/team.entity";

export interface TeamGateway {
  list(projectName: string): Promise<Team[]>
}