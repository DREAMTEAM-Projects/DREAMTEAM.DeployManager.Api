import Deploy from "../domain/entity/deploy.entity";
import { DeployGateway } from "../gateway/deploy.gateway";
import { PrismaClient } from '@prisma/client'


export default class DeployRepository implements DeployGateway {
 
  constructor(private readonly client: PrismaClient) {}

  async save(deploy: Deploy): Promise<{ id: string }> {
    const { author, ...jsonDeploy } = deploy.toJSON()
    return await this.client.deploy.create({
      data: {
        id: jsonDeploy.id,
        title: jsonDeploy.title,
        message: jsonDeploy.message,
        team: jsonDeploy.team,
        project: jsonDeploy.project,
        finishedAt: jsonDeploy.finishedAt,
        status: Number(jsonDeploy.status),
        tags: jsonDeploy.tags?.join(),
        active: jsonDeploy.active,
        author: {
          connectOrCreate: {
            where: {
              email: author.email
            },
            create: {
              ...author
            }
          }
        }
      },
      select: {
        id: true
      }
    })
  }

}