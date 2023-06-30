import Deploy, { DeployProps } from "../../domain/entity/deploy.entity";
import { DeployGateway } from "../../gateway/deploy.gateway";
import { FindDeployUseCaseInputDto, FindDeployUseCaseOutputDto } from "./find-deploy.usecase.dto";

export default class FindDeployUseCase {

  constructor(private readonly _deployRepository: DeployGateway) {}

  async execute(input: FindDeployUseCaseInputDto): Promise<FindDeployUseCaseOutputDto | null> {
    return await this._deployRepository.find(input)
  }

}
