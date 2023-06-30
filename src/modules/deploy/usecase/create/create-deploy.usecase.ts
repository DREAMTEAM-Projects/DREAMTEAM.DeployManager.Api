import Deploy, { DeployProps } from '../../domain/entity/deploy.entity'
import { DeployGateway } from '../../gateway/deploy.gateway'
import {
  CreateDeployUseCaseInputDto,
  CreateDeployUseCaseOutputDto
} from './create-deploy.usecase.dto'

export default class CreateDeployUseCase {
  constructor(private readonly _deployRepository: DeployGateway) {}

  async execute(
    input: CreateDeployUseCaseInputDto
  ): Promise<CreateDeployUseCaseOutputDto> {
    const props: DeployProps = {
      title: input.title,
      message: input.message,
      team: input.team,
      project: input.project,
      author: input.author,
      tags: input.tags,
      pbis: input.pbis,
      date: input.date
    }
    const deploy = new Deploy(props)
    return await this._deployRepository.save(deploy)
  }
}
