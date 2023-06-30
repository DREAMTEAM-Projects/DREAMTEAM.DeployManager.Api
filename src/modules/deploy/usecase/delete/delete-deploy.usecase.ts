import Deploy, { DeployProps } from "../../domain/entity/deploy.entity";
import { DeployGateway } from "../../gateway/deploy.gateway";
import { DeleteDeployUseCaseInputDto, DeleteDeployUseCaseOutputDto } from "./delete-deploy.usecase.dto";

export default class DeleteDeployUseCase {
  constructor(private readonly _deployRepository: DeployGateway) {}

  async execute(input: DeleteDeployUseCaseInputDto): Promise<DeleteDeployUseCaseOutputDto> {
    const props: DeployProps = {
      id: input.id
    }
    const deploy = new Deploy(props)
    return await this._deployRepository.delete(deploy)
  }
}
