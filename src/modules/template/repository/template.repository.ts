import { PrismaClient } from '@prisma/client'
import cripto from 'crypto'
import Template from '../domain/entity/template.entity'
import { TemplateGateway } from '../gateway/template.gateway'
import { ListTemplateUseCaseOutputDto } from '../usecase/list/list-template.usecase.dto'
import { UpdateTemplateUseCaseOutputDto } from '../usecase/update/update-template.usecase.dto'

export default class TemplateRepository implements TemplateGateway {
  constructor(private readonly client: PrismaClient) {}

  async delete(id: string): Promise<{ id: string } | null> {
    return await this.client.template.delete({
      where: { id },
      select: { id: true }
    })
  }

  async save(template: Template): Promise<{ id: string } | null> {
    const { author, ...jsonTemplate } = template.toJSON()

    if (!author) return null

    return await this.client.template.create({
      data: {
        id: jsonTemplate.id,
        message: jsonTemplate.message!,
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

  async update(template: Template): Promise<UpdateTemplateUseCaseOutputDto> {
    const { author, ...jsonTemplate } = template.toJSON()

    return await this.client.template.update({
      where: {
        id: jsonTemplate.templateId
      },
      data: {
        message: jsonTemplate.message
      },
      select: {
        id: true
      }
    })
  }

  async list(
    template: Template
  ): Promise<ListTemplateUseCaseOutputDto[] | null> {
    const { ...jsonTemplate } = template.toJSON()

    if (!jsonTemplate.authorId) return null

    return await this.client.template.findMany({
      where: {
        author: {
          id: jsonTemplate.authorId
        }
      },
      select: {
        id: true,
        message: true
      }
    })
  }
}
