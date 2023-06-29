import { PrismaClient } from "@prisma/client"
import CreateDocumentController from "../presentation/create-document.controller"
import DocumentRepository from "../repository/document.repository"
import CreateDocumentUseCase from "../usecase/create/create-document.usecase"

export const makeCreateDocumentController = () => {
  const documentRepository = new DocumentRepository(new PrismaClient())
  const createDocumentUseCase = new CreateDocumentUseCase(documentRepository)
  return new CreateDocumentController(createDocumentUseCase)
}