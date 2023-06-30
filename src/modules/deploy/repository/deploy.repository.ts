import { PrismaClient } from '@prisma/client'
import cripto from 'crypto'
import Deploy from '../domain/entity/deploy.entity'
import { DeployGateway } from '../gateway/deploy.gateway'

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
        pbis: jsonDeploy.pbis?.join(),
        active: jsonDeploy.active,
        date: jsonDeploy.date !== null ? new Date(jsonDeploy.date!) : null,
        author: {
          connectOrCreate: {
            where: {
              email: author.email
            },
            create: {
              ...author,
              id: cripto.randomUUID()
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
