import { PrismaClient } from '@prisma/client';
import Document from "../domain/entity/documents.entity";
import { DocumentGateway } from "../gateway/document.gateway";


export default class DocumentRepository implements DocumentGateway {

  constructor(private readonly client: PrismaClient) { }

  async save(document: Document): Promise<{ id: string }> {
    const jsonDocument = document.toJSON()
    return this.client.documents.create({
      data: {
        id: jsonDocument.id,
        filename: jsonDocument.filename,
        url: jsonDocument.url,
        deployId: jsonDocument.deploy,
      },
      select: {
        id: true
      }
    })
  }

  async delete(id: string): Promise<{ id: string }> {
    return this.client.documents.delete({
      where: { id: id },
      select: { id: true  }
    })
  }
}