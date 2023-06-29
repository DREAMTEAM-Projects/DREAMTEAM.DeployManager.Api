import { ProjectGateway } from "../../gateway/project.gateway";
import { ListProjectUseCaseOutputDto } from "./list-project.usecase.dto";

export default class ListProjectUseCase {

  constructor(private readonly _projectGateway: ProjectGateway) {}

  async execute(): Promise<ListProjectUseCaseOutputDto> {
    const projects = await this._projectGateway.list()
    return { projects: projects.map(project => project.description) }
  }

}