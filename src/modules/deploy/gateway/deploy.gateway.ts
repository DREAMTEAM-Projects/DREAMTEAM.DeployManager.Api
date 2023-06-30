import Deploy from "../domain/entity/deploy.entity";
import { FindDeployUseCaseOutputDto } from "../usecase/find/find-deploy.usecase.dto";
import { UpdateDeployUseCaseOutputDto } from "../usecase/update/update-deploy.usecase.dto";

export interface DeployGateway {
  save(deploy: Deploy): Promise<{ id: string } | null>
  find(deploy: Partial<Deploy>): Promise<FindDeployUseCaseOutputDto | null>
  update(deploy: Deploy): Promise<UpdateDeployUseCaseOutputDto | null>
  delete(deploy: Partial<Deploy>): Promise<{ id: string }>
}
