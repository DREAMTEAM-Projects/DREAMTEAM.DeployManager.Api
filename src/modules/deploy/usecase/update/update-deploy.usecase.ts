import Deploy, { DeployProps } from "../../domain/entity/deploy.entity";
import { DeployGateway } from "../../gateway/deploy.gateway";
import { UpdateDeployUseCaseInputDto, UpdateDeployUseCaseOutputDto } from "./update-deploy.usecase.dto";

export default class UpdateDeployUseCase {
  constructor(private readonly _deployRepository: DeployGateway) {}

  async execute(input: UpdateDeployUseCaseInputDto): Promise<UpdateDeployUseCaseOutputDto | null> {
    const props: DeployProps = {
      id: input.id,
      title: input.title,
      message: input.message,
      team: input.team,
      project: input.project,
      author: input.author,
      tags: input.tags
    }
    const deploy = new Deploy(props)
    return await this._deployRepository.update(deploy)
  }
}
