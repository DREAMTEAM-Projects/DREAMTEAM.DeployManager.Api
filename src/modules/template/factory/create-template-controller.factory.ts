import { PrismaClient } from "@prisma/client"
import TemplateRepository from "../repository/template.repository"
import CreateTemplateUseCase from "../usecase/create/create-template.usecase"
import CreateTemplateController from "../presentation/create-template.controller"

export const makeCreateTemplateController = (): CreateTemplateController => {
  const createTemplateUseCase = new CreateTemplateUseCase(
    new TemplateRepository(
      new PrismaClient()
    )
  )

  return new CreateTemplateController(createTemplateUseCase)
}