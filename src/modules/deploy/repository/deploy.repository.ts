import { PrismaClient } from '@prisma/client'
import cripto from 'crypto'
import Deploy from '../domain/entity/deploy.entity'
import { DeployGateway } from '../gateway/deploy.gateway'
import { FindDeployUseCaseOutputDto } from '../usecase/find/find-deploy.usecase.dto'

export default class DeployRepository implements DeployGateway {
  constructor(private readonly client: PrismaClient) {}

  async save(deploy: Deploy): Promise<{ id: string } | null> {
    const { author, ...jsonDeploy } = deploy.toJSON()

    if (!author) return null

    return await this.client.deploy.create({
      data: {
        id: jsonDeploy.id,
        title: jsonDeploy.title ?? '',
        message: jsonDeploy.message ?? '',
        team: jsonDeploy.team ?? '',
        project: jsonDeploy.project ?? '',
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

  async update(deploy: Deploy): Promise<{ id: string } | null> {
    const { author, ...jsonDeploy } = deploy.toJSON()

    if (!author) return null

    return await this.client.deploy.update({
      where: {
        id: jsonDeploy.id
      },
      data: {
        title: jsonDeploy.title,
        message: jsonDeploy.message,
        team: jsonDeploy.team,
        project: jsonDeploy.project,
        finishedAt: jsonDeploy.finishedAt,
        status: Number(jsonDeploy.status),
        tags: jsonDeploy.tags?.join(),
        active: jsonDeploy.active
      },
      select: {
        id: true
      }
    })
  }

  async delete(deploy: Partial<Deploy>): Promise<{ id: string }> {
    return await this.client.deploy.update({
      where: {
        id: deploy.id
      },
      data: {
        active: false
      },
      select: {
        id: true
      }
    })
  }

  async find(
    deploy: Partial<Deploy>
  ): Promise<FindDeployUseCaseOutputDto | null> {
    if (!deploy.id) return null

    const result = await this.client.deploy.findFirst({
      where: {
        id: deploy.id
      },
      select: {
        title: true,
        message: true,
        team: true,
        project: true,
        author: true,
        tags: true
      }
    })

    return {
      ...result,
      tags: result?.tags?.split(',')
    }
  }
}
