import { PrismaClient } from '@prisma/client'
import cripto from 'crypto'
import Deploy from '../domain/entity/deploy.entity'
import { DeployGateway } from '../gateway/deploy.gateway'
import { FindDeployUseCaseOutputDto } from '../usecase/find/find-deploy.usecase.dto'
import { ListDeployUseCaseOutputDto } from "../usecase/list/list-deploy.usecase.dto";

export default class DeployRepository implements DeployGateway {
 
  constructor(private readonly client: PrismaClient) { }
  
  async list(deploy: Deploy): Promise<ListDeployUseCaseOutputDto[] | null> {
    const { author, ...jsonDeploy } = deploy.toJSON()

    const { project, title, tag, authorEmail, authorName, status, date } = jsonDeploy

    const whereConditions = []

    if (project) whereConditions.push({ project: { contains: project } })
    if (title) whereConditions.push({ title: { contains: title} })
    if (tag) whereConditions.push({ tags: { contains: tag } })
    if (status) whereConditions.push({ status: { equals: status } })
    if (date) whereConditions.push({ finishedAt: { equals: new Date(date)} })
    if (authorEmail) whereConditions.push({ author: { email: { contains: authorEmail } } })
    if (authorName) whereConditions.push({ author: { name: { contains: authorName} }})

    const result =  await this.client.deploy.findMany({
      where: {
        AND: [...whereConditions]
      },
      select: {
        id: true,
        title: true,
        message: true,
        team: true,
        project: true,
        author: true,
        tags: true,
        status: true
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

    return result.map(item => ({
      ...item,
      tags: item.tags?.split(',')
    }))
  }

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
