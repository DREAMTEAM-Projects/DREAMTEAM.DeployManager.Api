import { PrismaClient } from '@prisma/client';
import Document from "../domain/entity/documents.entity";
import { DocumentGateway } from "../gateway/document.gateway";


export default class DocumentRepository implements DocumentGateway {

  constructor(private readonly client: PrismaClient) { }

  async save(document: Document): Promise<{ id: string }> {
    const jsonDocument = document.toJSON()
    return await this.client.documents.create({
      data: {
        id: jsonDocument.id,
        filename: jsonDocument.filename,
        url: jsonDocument.url,
        deploy: jsonDocument.deploy,
      },
      select: {
        id: true
      }
    })
  }
}