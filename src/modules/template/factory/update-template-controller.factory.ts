import { PrismaClient } from "@prisma/client"
import TemplateRepository from "../repository/template.repository"
import UpdateTemplateUseCase from "../usecase/update/update-template.usecase"
import UpdateTemplateController from "../presentation/update-template.controller"

export const makeUpdateTemplateController = (): UpdateTemplateController => {
  const updateTemplateUseCase = new UpdateTemplateUseCase(
    new TemplateRepository(
      new PrismaClient()
    )
  )

  return new UpdateTemplateController(updateTemplateUseCase)
}