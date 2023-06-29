import { PrismaClient } from "@prisma/client"
import DeleteDocumentController from "../presentation/delete-document.controller"
import DocumentRepository from "../repository/document.repository"
import DeleteDocumentUseCase from "../usecase/delete/delete-document.usecase"

export const makeDeleteDocumentController = () => {
  const documentRepository = new DocumentRepository(new PrismaClient())
  const deleteDocumentUseCase = new DeleteDocumentUseCase(documentRepository)
  return new DeleteDocumentController(deleteDocumentUseCase)
}