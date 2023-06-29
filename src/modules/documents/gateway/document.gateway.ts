import Document from "../domain/entity/documents.entity";

export interface DocumentGateway {
  save(document: Document): Promise<{ id: string }>
  delete(id: string): Promise<{ id: string }>
}