import Deploy, { DeployProps } from "../../domain/entity/deploy.entity";
import { DeployGateway } from "../../gateway/deploy.gateway";
import { ListDeployUseCaseInputDto, ListDeployUseCaseOutputDto } from "./list-deploy.usecase.dto";

export default class ListDeployUseCase {

  constructor(private readonly _deployRepository: DeployGateway) {}

  async execute(input: ListDeployUseCaseInputDto): Promise<ListDeployUseCaseOutputDto[] | null> {
    const props: DeployProps = {
      title: input.title,
      team: input.team,
      project: input.project,
      authorEmail: input.authorEmail,
      authorName: input.authorName,
      tag: input.tag,
      date: input.date
    }
    
    const deploy = new Deploy(props)
    return await this._deployRepository.list(deploy)
  }

}
