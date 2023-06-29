import Deploy from "../domain/entity/deploy.entity";

export interface DeployGateway {
  save(deploy: Deploy): Promise<{ id: string }>
}