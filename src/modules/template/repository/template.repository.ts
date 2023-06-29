import Template from "../domain/entity/template.entity"
import { TemplateGateway } from '../gateway/template.gateway'
import { PrismaClient } from '@prisma/client'
import cripto from "crypto";


export default class TemplateRepository implements TemplateGateway {
 
  constructor(private readonly client: PrismaClient) {}

  async save(template: Template): Promise<{ id: string }> {
    const { author, ...jsonDeploy } = template.toJSON()
    return await this.client.template.create({
      data: {
        id: jsonDeploy.id,
        message: jsonDeploy.message,
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