import { PrismaClient } from "@prisma/client"
import TemplateRepository from "../repository/template.repository"
import ListTemplateUseCase from "../usecase/list/list-template.usecase"
import ListTemplateController from "../presentation/list-template.controller"

export const makeListTemplateController = (): ListTemplateController => {
  const listTemplateUseCase = new ListTemplateUseCase(
    new TemplateRepository(
      new PrismaClient()
    )
  )

  return new ListTemplateController(listTemplateUseCase)
}